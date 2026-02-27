import { Injectable } from '@nestjs/common';
import { CreateTransferenciaDto } from './create-transferencia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transferencia } from './entities/transferencia.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransferenciasService {
    constructor(
        @InjectRepository(Transferencia)
        private repo:Repository<Transferencia>,
    ){}

    async create(dto:CreateTransferenciaDto){
        const transferencia=this.repo.create({
            ...dto,fecha:new Date(),
        });

        return this.repo.save(transferencia);
    }
}
