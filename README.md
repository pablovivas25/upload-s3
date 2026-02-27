# 🚀 NestJS + AWS S3 + PostgreSQL (RDS)

Este proyecto es una API desarrollada con NestJS que permite:

- 📂 Subir archivos a AWS S3
- 🗄️ Persistir datos en PostgreSQL (AWS RDS)
- ⚙️ Manejo de variables de entorno
- 🔐 Buenas prácticas para producción

---

## 🧱 Tecnologías utilizadas

- NestJS
- TypeORM
- PostgreSQL (AWS RDS)
- AWS S3
- Multer

---

## ⚙️ Configuración del proyecto

### 1. Clonar repositorio

```bash
git clone <repo-url>
cd <repo>
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Variables de entorno

Crear un archivo `.env`:

```env
# APP
PORT=3000

# DATABASE
DB_HOST=your-rds-endpoint
DB_PORT=5432
DB_USER=postgres
DB_PASS=your_password
DB_NAME=your_db

# AWS
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_REGION=us-east-1
AWS_BUCKET=your_bucket_name
```

---

## 🗄️ Base de datos (PostgreSQL en AWS RDS)

Asegurate de:

- Habilitar acceso público
- Configurar Security Group para permitir:
  - Puerto: 5432
  - Origen: 0.0.0.0/0 (solo para pruebas)

---

## ▶️ Ejecutar el proyecto

```bash
npm run start:dev
```

---

## 📤 Endpoint de subida de archivos

### POST /upload

**Body (form-data):**
- key: `file`
- type: File

---

## 🧪 Probar con Postman

1. Método: POST
2. URL: http://localhost:3000/upload
3. Body → form-data
4. Key: `file` (tipo File)
5. Seleccionar archivo

---

## ☁️ Ejemplo de respuesta

```json
{
  "url": "https://your-bucket.s3.amazonaws.com/123456-file.png"
}
```

---

## ⚠️ Notas importantes

- ❌ No usar `synchronize: true` en producción
- 🔐 Usar variables de entorno seguras
- 🔒 Restringir el acceso del Security Group en producción

---

## 📌 Próximos pasos

- Autenticación con JWT
- Subida de múltiples archivos
- Generación de URLs firmadas (S3)
- Deploy en AWS (EC2 o ECS)

---

## 👨‍💻 Autor

Pablo Vivas
