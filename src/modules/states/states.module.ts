import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateRepository } from 'src/repository/states.repository';
import { StateResolver } from './states.resolver';
import { StateService } from './states.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([StateRepository]),
  ],
  providers: [StateResolver, StateService],
})
export class StatesModule {}
