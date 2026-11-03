import { Module } from '@nestjs/common';
import { PartyTablesService } from './party_tables.service';
import { PartyTablesController } from './party_tables.controller';

@Module({
  controllers: [PartyTablesController],
  providers: [PartyTablesService],
})
export class PartyTablesModule {}
