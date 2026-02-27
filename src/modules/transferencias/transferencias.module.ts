import { Module } from '@nestjs/common';
import { TransferenciasController } from './transferencias.controller';
import { TransferenciasService } from './transferencias.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transferencia } from './entities/transferencia.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Transferencia])],
  controllers: [TransferenciasController],
  providers: [TransferenciasService]
})
export class TransferenciasModule {}
