import { Comprobante } from '../../comprobantes/entities/comprobante.entity';
export declare class Transferencia {
    id: number;
    monto: number;
    descripcion: string;
    fecha: Date;
    comprobantes: Comprobante[];
}
