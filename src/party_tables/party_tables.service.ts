import { Injectable } from '@nestjs/common';

type PartyTable = {
  id: number;
  name: string;
  nb_players: number;
  nb_max_players: number;
};
@Injectable()
export class PartyTablesService {
  list_of_party_tables: PartyTable[];
  constructor() {
    this.list_of_party_tables = [
      { id: 1, name: 'Table 1', nb_players: 2, nb_max_players: 5 },
      { id: 2, name: 'Table 2', nb_players: 3, nb_max_players: 5 },
      { id: 3, name: 'Table 3', nb_players: 2, nb_max_players: 5 },
    ];
  }

  getPartyOneTable(id: number) {
    if (id <= this.list_of_party_tables.length && id > 0) {
      return this.list_of_party_tables[id - 1];
    }
    return '❌ Erreur 404 - Table not found ';
  }

  createTable(
    name: string,
    nb_max_players: number = 5,
    nb_players: number = 0,
  ) {
    this.list_of_party_tables.push({
      id: this.list_of_party_tables.length + 1,
      name: name,
      nb_players: nb_players,
      nb_max_players: nb_max_players,
    });
  }

  getAll() {
    return this.list_of_party_tables;
  }
}
