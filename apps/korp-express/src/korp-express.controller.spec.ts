import { Test, TestingModule } from '@nestjs/testing';
import { BillingController } from './korp-express.controller';
import { BillingService } from './korp-express.service';

describe('BillingController', () => {
  let billingController: BillingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BillingController],
      providers: [BillingService],
    }).compile();

    billingController = app.get<BillingController>(BillingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(billingController.getHello()).toBe('Hello World!');
    });
  });
});
