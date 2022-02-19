import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampusRepository } from 'src/repository/campus.repository';
import { CountriesRepository } from 'src/repository/countries.repository';
import { MigrantsPersonRepository } from 'src/repository/migrantsPersons.repository';
import { MigrantsPersonsResolver } from './migrantsPersons.resolver';
import { MigrantsPersonsService } from './migrantsPersons.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([MigrantsPersonRepository, CountriesRepository, CampusRepository]),
  ],
  providers: [MigrantsPersonsResolver, MigrantsPersonsService],
})
export class MigrantsPersonsModule {}
