import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PartyTablesController } from './party_tables/party_tables.controller';
import { PartyTablesService } from './party_tables/party_tables.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, PartyTablesController],
  providers: [AppService, PartyTablesService],
})
export class AppModule {}
