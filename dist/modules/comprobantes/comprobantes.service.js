"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprobantesService = void 0;
const common_1 = require("@nestjs/common");
const transferencia_entity_1 = require("../transferencias/entities/transferencia.entity");
const comprobante_entity_1 = require("./entities/comprobante.entity");
const uploads_service_1 = require("../uploads/uploads.service");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let ComprobantesService = class ComprobantesService {
    comprobanteRepo;
    transferenciaRepo;
    uploadsService;
    constructor(comprobanteRepo, transferenciaRepo, uploadsService) {
        this.comprobanteRepo = comprobanteRepo;
        this.transferenciaRepo = transferenciaRepo;
        this.uploadsService = uploadsService;
    }
    async create(file, dto) {
        const transferencia = await this.transferenciaRepo.findOneBy({
            id: dto.transferenciaId,
        });
        if (!transferencia)
            throw new Error('Transferencia no encontrada');
        const file_url = await this.uploadsService.uploadFile(file);
        const comprobante = this.comprobanteRepo.create({
            file_url,
            transferencia,
        });
        return this.comprobanteRepo.save(comprobante);
    }
};
exports.ComprobantesService = ComprobantesService;
exports.ComprobantesService = ComprobantesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(comprobante_entity_1.Comprobante)),
    __param(1, (0, typeorm_2.InjectRepository)(transferencia_entity_1.Transferencia)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        uploads_service_1.UploadsService])
], ComprobantesService);
//# sourceMappingURL=comprobantes.service.js.map