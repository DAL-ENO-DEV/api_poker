import { Injectable } from '@nestjs/common';

@Injectable()
export class PartyTablesService {
  list_of_party_tables: string[];
  constructor() {
    this.list_of_party_tables = ['Table 1', 'Table 2', 'Table 3'];
  }

  getPartyOneTable(position: number) {
    if (position < this.list_of_party_tables.length) {
      return this.list_of_party_tables[position];
    }
  }
  getAll() {
    return this.list_of_party_tables;
  }
}
