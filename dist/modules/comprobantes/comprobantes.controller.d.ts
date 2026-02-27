import { ComprobantesService } from './comprobantes.service';
import { CreateComprobanteDto } from './create-comprobante.dto';
export declare class ComprobantesController {
    private readonly comprobntesServices;
    constructor(comprobntesServices: ComprobantesService);
    upload(file: Express.Multer.File, dto: CreateComprobanteDto): Promise<import("./entities/comprobante.entity").Comprobante>;
}
