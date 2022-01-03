import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MigrantsPersonRepository } from 'src/repository/migrantsPersons.repository';
import { RelativesMigrantsRepository } from 'src/repository/relativesMigrants.repository';
import { RelativesMigrantsResolver } from './relativesMigrants.resolver';
import { RelativeMigrantService } from './relativesMigrants.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([MigrantsPersonRepository, RelativesMigrantsRepository]),
  ],
  providers: [RelativesMigrantsResolver, RelativeMigrantService],
})
export class RelativeMigrantsModule {}
