import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { UserController } from './user.controller';
import { AppService } from './app.service';
import { DbService } from './db.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, DbService],
})
export class AppModule { }
