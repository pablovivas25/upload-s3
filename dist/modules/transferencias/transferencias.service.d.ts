import { CreateTransferenciaDto } from './create-transferencia.dto';
import { Transferencia } from './entities/transferencia.entity';
import { Repository } from 'typeorm';
export declare class TransferenciasService {
    private repo;
    constructor(repo: Repository<Transferencia>);
    create(dto: CreateTransferenciaDto): Promise<Transferencia>;
}
