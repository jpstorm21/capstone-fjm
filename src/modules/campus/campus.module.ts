import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampusRepository } from '../../repository/campus.repository';
import { CampusResolver } from './campus.resolver';
import { CampusService } from './campus.service';

@Module({
  imports: [TypeOrmModule.forFeature([CampusRepository])],
  providers: [CampusResolver, CampusService],
})
export class CampusModule {}
