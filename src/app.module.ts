import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

// entities
import { Users, Products } from './entities';

// Modules
import { UsersModule, AuthModule } from './modules';

dotenv.config();

const { TYPEORM_HOST, TYPEORM_USERNAME, TYPEORM_PASSWORD, TYPEORM_DATABASE, TYPEORM_SYNCHRONIZE, TYPEORM_CONNECTION } =  process.env;

@Module({
  imports: [
    UsersModule,
    AuthModule,
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
      entities: [Users, Products],
      synchronize: TYPEORM_SYNCHRONIZE == "true" ? true : false,
      retryDelay: 3000,
      retryAttempts: 10,
      keepConnectionAlive: true
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
