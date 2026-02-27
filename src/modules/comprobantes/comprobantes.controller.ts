import { Controller,Post,UploadedFile,UseInterceptors,Body} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ComprobantesService } from './comprobantes.service';
import { CreateComprobanteDto } from './create-comprobante.dto';

@Controller('comprobantes')
export class ComprobantesController {

    constructor(
        private readonly comprobntesServices:ComprobantesService
    ){}

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    upload(
        @UploadedFile() file:Express.Multer.File,
        @Body() dto:CreateComprobanteDto,
    ){
        return this.comprobntesServices.create(file,dto);
    }

}
