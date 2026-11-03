import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Param,
  Dependencies,
} from '@nestjs/common';
import { PartyTablesService } from './party_tables.service';

@Controller('party-tables')
@Dependencies(PartyTablesService)
export class PartyTablesController {
  //constructor(private readonly partyTablesService: PartyTablesService) {}
  partyTablesService: PartyTablesService;
  constructor(partyTablesService: PartyTablesService) {
    this.partyTablesService = partyTablesService;
  }

  @Get()
  findAll() {
    return this.partyTablesService.getAll();
  }
}
