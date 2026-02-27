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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comprobante = void 0;
const typeorm_1 = require("typeorm");
const transferencia_entity_1 = require("../../transferencias/entities/transferencia.entity");
let Comprobante = class Comprobante {
    id;
    file_url;
    create_at;
    transferencia;
};
exports.Comprobante = Comprobante;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Comprobante.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Comprobante.prototype, "file_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Comprobante.prototype, "create_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => transferencia_entity_1.Transferencia, transferencia => transferencia.comprobantes, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", transferencia_entity_1.Transferencia)
], Comprobante.prototype, "transferencia", void 0);
exports.Comprobante = Comprobante = __decorate([
    (0, typeorm_1.Entity)()
], Comprobante);
//# sourceMappingURL=comprobante.entity.js.map