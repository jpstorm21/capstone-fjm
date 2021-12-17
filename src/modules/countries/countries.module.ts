import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountriesResolver } from './countries.resolver';
import { CountriesService } from './countries.service';
import { CountriesRepository } from '../../repository/countries.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([CountriesRepository]),        
    ],
    providers: [CountriesResolver, CountriesService]
})

export class CountriesModule {};