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

@Controller('party_tables')
@Dependencies(PartyTablesService)
export class PartyTablesController {
  //constructor(private readonly partyTablesService: PartyTablesService) {}
  partyTablesService: PartyTablesService;
  constructor(partyTablesService: PartyTablesService) {
    this.partyTablesService = partyTablesService;
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: number) {
    return this.partyTablesService.getPartyOneTable(id);
  }

  @Post()
  createOne(
    @Body('name') name: string,
    @Body('nb_players') nb_players: number = 0,
    @Body('nb_max_players') nb_max_players: number = 5,
  ) {
    return this.partyTablesService.createTable(
      name,
      nb_players,
      nb_max_players,
    );
  }

  @Get()
  findAll() {
    return this.partyTablesService.getAll();
  }
}
