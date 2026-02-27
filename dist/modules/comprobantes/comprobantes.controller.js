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
exports.ComprobantesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const comprobantes_service_1 = require("./comprobantes.service");
const create_comprobante_dto_1 = require("./create-comprobante.dto");
let ComprobantesController = class ComprobantesController {
    comprobntesServices;
    constructor(comprobntesServices) {
        this.comprobntesServices = comprobntesServices;
    }
    upload(file, dto) {
        return this.comprobntesServices.create(file, dto);
    }
};
exports.ComprobantesController = ComprobantesController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_comprobante_dto_1.CreateComprobanteDto]),
    __metadata("design:returntype", void 0)
], ComprobantesController.prototype, "upload", null);
exports.ComprobantesController = ComprobantesController = __decorate([
    (0, common_1.Controller)('comprobantes'),
    __metadata("design:paramtypes", [comprobantes_service_1.ComprobantesService])
], ComprobantesController);
//# sourceMappingURL=comprobantes.controller.js.map