import { Injectable } from '@nestjs/common';
import { CreateComprobanteDto } from './create-comprobante.dto';
import { Transferencia } from '../transferencias/entities/transferencia.entity';
import { Comprobante } from './entities/comprobante.entity';
import { UploadsService } from '../uploads/uploads.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ComprobantesService {
    constructor(
        @InjectRepository(Comprobante)
        private comprobanteRepo:Repository<Comprobante>,

        @InjectRepository(Transferencia)
        private transferenciaRepo:Repository<Transferencia>,

        private uploadsService:UploadsService,
    ){}

    async create(file:Express.Multer.File,dto:CreateComprobanteDto){
        const transferencia=await this.transferenciaRepo.findOneBy({
            id:dto.transferenciaId,
        });

        if(!transferencia)
            throw new Error('Transferencia no encontrada');

        const file_url=await this.uploadsService.uploadFile(file);

        const comprobante=this.comprobanteRepo.create({
            file_url,
            transferencia,
        });

        return this.comprobanteRepo.save(comprobante);
    }
}
