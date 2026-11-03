import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayerService {
    list_of_players: string[];
    constructor() {
        console.log("Mes joueurs de Poker");
        this.list_of_players = ['John', 'Jane', 'Bob', 'Aron', 'Alice', 'Eve', 'Charlie', 'David', 'Frank', 'Grace']; 
    }
}
