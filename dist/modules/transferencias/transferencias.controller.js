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
exports.TransferenciasController = void 0;
const common_1 = require("@nestjs/common");
const create_transferencia_dto_1 = require("./create-transferencia.dto");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const transferencias_service_1 = require("./transferencias.service");
let TransferenciasController = class TransferenciasController {
    transferenciasService;
    constructor(transferenciasService) {
        this.transferenciasService = transferenciasService;
    }
    create(dto) {
        return this.transferenciasService.create(dto);
    }
};
exports.TransferenciasController = TransferenciasController;
__decorate([
    (0, common_2.Post)(),
    __param(0, (0, common_3.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_transferencia_dto_1.CreateTransferenciaDto]),
    __metadata("design:returntype", void 0)
], TransferenciasController.prototype, "create", null);
exports.TransferenciasController = TransferenciasController = __decorate([
    (0, common_1.Controller)('transferencias'),
    __metadata("design:paramtypes", [transferencias_service_1.TransferenciasService])
], TransferenciasController);
//# sourceMappingURL=transferencias.controller.js.map