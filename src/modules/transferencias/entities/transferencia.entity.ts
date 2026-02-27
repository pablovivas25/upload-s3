import { Entity,PrimaryGeneratedColumn,Column,OneToMany} from "typeorm";
import {Comprobante} from '../../comprobantes/entities/comprobante.entity';

@Entity()

export class Transferencia{
    @PrimaryGeneratedColumn()
    id:number;

    @Column('decimal')
    monto:number;

    @Column()
    descripcion:string;

    @Column({type:'timestamp',default:()=>'CURRENT_TIMESTAMP'})
    fecha:Date;

    @OneToMany(()=>Comprobante,comprobante=>comprobante.transferencia)
    comprobantes:Comprobante[]
}