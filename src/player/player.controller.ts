import { Controller, Dependencies } from '@nestjs/common';
import { PlayerService } from './player.service';

@Controller('player')
@Dependencies(PlayerService)
export class PlayerController {
    playerService: PlayerService;
    constructor(playerService: PlayerService) {
        this.playerService = playerService;
    }
}

