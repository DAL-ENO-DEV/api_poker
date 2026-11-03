import { Test, TestingModule } from '@nestjs/testing';
import { PartyTablesController } from './party_tables.controller';
import { PartyTablesService } from './party_tables.service';

describe('PartyTablesController', () => {
  let controller: PartyTablesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartyTablesController],
      providers: [PartyTablesService],
    }).compile();

    controller = module.get<PartyTablesController>(PartyTablesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
