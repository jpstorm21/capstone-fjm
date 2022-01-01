import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

// entities
import {
  Users,
  SuperAdmins,
  Administratives,
  Campus,
  Countries,
  Follow,
  FollowStates,
  MigrantPersons,
  Records,
  Relatives,
  States,
} from './entities';

// Modules
import {
  UsersModule,
  AuthModule,
  CountriesModule,
  CampusModule,
  MigrantsPersonsModule,
  FollowsModule,
  StatesModule,
  FollowStateModule
} from './modules';

dotenv.config();

const {
  TYPEORM_HOST,
  TYPEORM_USERNAME,
  TYPEORM_PASSWORD,
  TYPEORM_DATABASE,
  TYPEORM_SYNCHRONIZE,
  TYPEORM_CONNECTION,
} = process.env;

@Module({
  imports: [ 
  UsersModule,
    AuthModule,
    CountriesModule,
    CampusModule,
    MigrantsPersonsModule,
    FollowsModule,
    StatesModule,
    FollowStateModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/**/*.graphql'],
      installSubscriptionHandlers: true,
      context: ({ req }) => ({ headers: req.headers }),
      debug: true,
      playground: true,
      introspection: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: TYPEORM_HOST,
      username: TYPEORM_USERNAME,
      password: TYPEORM_PASSWORD,
      database: TYPEORM_DATABASE,
      entities: [
        Users,
        SuperAdmins,
        Administratives,
        Campus,
        Countries,
        Follow,
        FollowStates,
        MigrantPersons,
        Records,
        Relatives,
        States,
      ],
      synchronize: TYPEORM_SYNCHRONIZE == 'true' ? true : false,
      retryDelay: 3000,
      retryAttempts: 10,
      keepConnectionAlive: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
