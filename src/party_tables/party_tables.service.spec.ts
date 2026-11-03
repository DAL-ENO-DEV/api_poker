import { Test, TestingModule } from '@nestjs/testing';
import { PartyTablesService } from './party_tables.service';

describe('PartyTablesService', () => {
  let service: PartyTablesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartyTablesService],
    }).compile();

    service = module.get<PartyTablesService>(PartyTablesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
