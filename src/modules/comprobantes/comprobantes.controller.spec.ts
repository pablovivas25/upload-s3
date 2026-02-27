import { Test, TestingModule } from '@nestjs/testing';
import { ComprobantesController } from './comprobantes.controller';

describe('ComprobantesController', () => {
  let controller: ComprobantesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComprobantesController],
    }).compile();

    controller = module.get<ComprobantesController>(ComprobantesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
