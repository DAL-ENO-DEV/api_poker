import { Injectable } from '@nestjs/common';

@Injectable()
export class PartyTablesService {
  list_of_party_tables: any[];
  constructor() {
    this.list_of_party_tables = [
      [1, 'Table 1', 2, 5],
      [2, 'Table 2', 3, 5],
      [3, 'Table 3', 2, 5],
    ];
  }

  getPartyOneTable(position: number) {
    if (position < this.list_of_party_tables.length) {
      return this.list_of_party_tables[position];
    }
  }

  createTable(
    name: string,
    nb_max_players: number = 5,
    nb_players: number = 0,
  ) {
    this.list_of_party_tables.push([
      this.list_of_party_tables.length + 1,
      name,
      nb_players,
      nb_max_players,
    ]);
  }

  getAll() {
    return this.list_of_party_tables;
  }
}
