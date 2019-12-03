import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
const ormConfig = require('../../../../ormconfig.json')

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...ormConfig, entities: [User] }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
}
