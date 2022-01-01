import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FollowsRepository } from 'src/repository/follow.repository';
import { FollowStateRepository } from 'src/repository/followState.repository';
import { StateRepository } from 'src/repository/states.repository';
import { FollowStateResolver } from './followState.resolver';
import { FollowStatesService } from './followState.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([FollowStateRepository, FollowsRepository, StateRepository]),
  ],
  providers: [FollowStateResolver, FollowStatesService],
})
export class FollowStateModule {}
