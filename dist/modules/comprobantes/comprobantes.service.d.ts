import { CreateComprobanteDto } from './create-comprobante.dto';
import { Transferencia } from '../transferencias/entities/transferencia.entity';
import { Comprobante } from './entities/comprobante.entity';
import { UploadsService } from '../uploads/uploads.service';
import { Repository } from 'typeorm';
export declare class ComprobantesService {
    private comprobanteRepo;
    private transferenciaRepo;
    private uploadsService;
    constructor(comprobanteRepo: Repository<Comprobante>, transferenciaRepo: Repository<Transferencia>, uploadsService: UploadsService);
    create(file: Express.Multer.File, dto: CreateComprobanteDto): Promise<Comprobante>;
}
