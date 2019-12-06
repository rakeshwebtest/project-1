import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UserModule } from './user/user.module';
import { UserEntity, MeetingEntity, GroupEntity } from './entities/index';
const ormConfig = require('../../../../ormconfig.json')
//  TypeOrmModule.forRoot({ ...ormConfig, entities: [User, Meeting] }),
// import envConfig from '.././config.env';

// const { ormtype: ormConfig } = envConfig;

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...ormConfig, entities: [UserEntity, MeetingEntity, GroupEntity] }),
    UserModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
}
