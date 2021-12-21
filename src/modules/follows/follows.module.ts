import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FollowsRepository } from 'src/repository/follow.repository';
import { FollowResolver } from './follows.resolver';
import { FollowService } from './follows.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([FollowsRepository]),        
    ],
    providers: [FollowResolver, FollowService]
})

export class FollowsModule {};