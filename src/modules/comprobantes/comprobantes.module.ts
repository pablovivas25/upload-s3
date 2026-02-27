import { Module } from '@nestjs/common';
import { ComprobantesController } from './comprobantes.controller';
import { ComprobantesService } from './comprobantes.service';
import { Comprobante } from './entities/comprobante.entity';
import { Transferencia } from '../transferencias/entities/transferencia.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadsModule } from '../uploads/uploads.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comprobante, Transferencia]), // 🔥 CLAVE
    UploadsModule, // 🔥 necesario para usar UploadsService
  ],
  controllers: [ComprobantesController],
  providers: [ComprobantesService]
})
export class ComprobantesModule {}
