import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MigrantsPersonRepository } from 'src/repository/migrantsPersons.repository';
import { MigrantsPersonsResolver } from './migrantsPersons.resolver';
import { MigrantsPersonsService } from './migrantsPersons.service';


@Module({
    imports: [
        TypeOrmModule.forFeature([MigrantsPersonRepository])
    ],
    providers: [MigrantsPersonsResolver, MigrantsPersonsService]
})

export class MigrantsPersonsModule {};