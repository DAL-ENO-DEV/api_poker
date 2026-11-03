import { Injectable } from '@nestjs/common';

@Injectable()
export class PartyTablesService {
  list_of_party_tables: string[];
  constructor() {
    this.list_of_party_tables = ['Table 1', 'Table 2', 'Table 3'];
  }

  getAll() {
    return this.list_of_party_tables;
  }
}
