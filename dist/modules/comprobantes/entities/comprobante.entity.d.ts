import { Transferencia } from '../../transferencias/entities/transferencia.entity';
export declare class Comprobante {
    id: number;
    file_url: string;
    create_at: Date;
    transferencia: Transferencia;
}
