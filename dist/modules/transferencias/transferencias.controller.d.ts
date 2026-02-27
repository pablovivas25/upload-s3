import { CreateTransferenciaDto } from './create-transferencia.dto';
import { TransferenciasService } from './transferencias.service';
export declare class TransferenciasController {
    private readonly transferenciasService;
    constructor(transferenciasService: TransferenciasService);
    create(dto: CreateTransferenciaDto): Promise<import("./entities/transferencia.entity").Transferencia>;
}
