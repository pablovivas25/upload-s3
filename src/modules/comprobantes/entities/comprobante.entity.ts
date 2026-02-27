import { Entity,PrimaryGeneratedColumn,Column,ManyToOne } from "typeorm";
import {Transferencia} from '../../transferencias/entities/transferencia.entity';

@Entity()

export class Comprobante{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    file_url:string;

    @Column({type:'timestamp',default:()=>'CURRENT_TIMESTAMP'})
    create_at:Date;

    @ManyToOne(()=>Transferencia,transferencia=>transferencia.comprobantes,{
        onDelete:'CASCADE',
    })
    transferencia:Transferencia;
}