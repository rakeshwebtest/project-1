import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { User, Meeting } from './entities/index';
// const ormConfig = require('../../../../ormconfig.json')
//  TypeOrmModule.forRoot({ ...ormConfig, entities: [User, Meeting] }),
import envConfig from '.././config.env';

const { ormtype: ormConfig } = envConfig;

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...ormConfig, entities: [User, Meeting] }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
}
