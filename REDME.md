📦 Upload S3 + Transferencias API

API desarrollada en NestJS para gestionar transferencias y sus comprobantes, incluyendo subida de archivos a AWS S3 y persistencia en PostgreSQL.

🚀 Tecnologías utilizadas

Node.js

NestJS

TypeORM

PostgreSQL

AWS S3

Docker

Multer

📂 Estructura del proyecto
src/
 ├── config/
 ├── modules/
 │    ├── transferencias/
 │    ├── comprobantes/
 │    ├── uploads/
 ├── app.module.ts
 └── main.ts
📌 Módulos principales

Transferencias

Manejo de transferencias

Comprobantes

Relacionados a una transferencia

Guarda la URL del archivo en S3

Uploads

Subida de archivos a AWS S3

🧠 Modelo de datos
Transferencia

id

monto

fecha

Comprobante

id

url (archivo en S3)

transferencia_id (FK)

👉 Relación:
Una transferencia puede tener muchos comprobantes

⚙️ Configuración de entorno

Crear archivo .env:

POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=transfer_app
DB_HOST=localhost

AWS_ACCESS_KEY=tu_access_key
AWS_SECRET_KEY=tu_secret_key
AWS_BUCKET=tu_bucket
AWS_REGION=us-east-1
🐳 Base de datos con Docker
services:
  postgres:
    image: postgres:15
    container_name: postgres_db
    restart: always
    environment:
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_DB: ${POSTGRES_DB}
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
Levantar DB:
docker-compose up -d
▶️ Ejecutar el proyecto
npm install
npm run start:dev
🔌 Configuración TypeORM
TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  autoLoadEntities: true,
  synchronize: false, // ⚠️ usar false en entornos reales
})
📤 Subida de archivos (S3)

Endpoint:

POST /uploads
En Postman:

Method: POST

Body: form-data

Key: file

Type: File

📥 Crear transferencia
POST /transferencias
{
  "monto": 1000
}
📎 Crear comprobante con archivo
POST /comprobantes

Body: form-data

file: archivo

transferenciaId: 1

⚠️ Problemas comunes
❌ No se crean tablas

Verificar .env

Revisar conexión DB

Confirmar autoLoadEntities: true

❌ Error de dependencias (NestJS)

Asegurar TypeOrmModule.forFeature([Entity]) en cada módulo

Importar módulos correctamente

❌ Error AWS S3 (MaxMessageLengthExceeded)

Archivo demasiado grande

Configurar límite en Multer

❌ Error conexión RDS

Revisar Security Group (puerto 5432 abierto)

Habilitar acceso público

Configurar SSL si es requerido

🔄 Migraciones (recomendado)

En producción usar migraciones en lugar de synchronize.

npx typeorm migration:generate
npx typeorm migration:run
📌 Mejoras futuras

Autenticación con JWT

Validaciones con class-validator

Manejo de errores centralizado

Logs estructurados

Testing (unit + e2e)

CI/CD

👨‍💻 Autor

Pablo Vivas