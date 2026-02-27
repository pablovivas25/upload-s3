import { Controller } from '@nestjs/common';
import { CreateTransferenciaDto } from './create-transferencia.dto';
import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { TransferenciasService } from './transferencias.service';

@Controller('transferencias')
export class TransferenciasController {

    constructor(
    private readonly transferenciasService: TransferenciasService,
    ) {}

    @Post()
    create(@Body() dto:CreateTransferenciaDto){
        return this.transferenciasService.create(dto);
    }
}
