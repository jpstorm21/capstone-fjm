import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CountriesRepository } from 'src/repository/countries.repository';
import { Country, CountryData } from 'src/graphql.schema';

@Injectable()
export class CountriesService {
    private logger: Logger = new Logger(CountriesService.name);

    constructor(
        @InjectRepository(CountriesRepository) private countriesRepository: CountriesRepository
    ) { }

    async getCountries(): Promise<Country[]>{
        try {
            this.logger.debug('getting countries');
            return await this.countriesRepository.getCountries();
        } catch (error) {
            throw error
        }
    }

    async createCountry(countryData: CountryData): Promise<Country> {
        try {
            this.logger.debug(`creating country=${JSON.stringify(countryData)}`);
            const { name } = countryData;

            if (!name) {
                throw new HttpException(
                    'Param name is undefined',
                    HttpStatus.BAD_REQUEST,
                );
            }           

            const countryByName = await this.countriesRepository.getCountriesByName(name);

            if (countryByName) {
                throw new HttpException(
                    `Country with name=${name} exists`,
                    HttpStatus.BAD_REQUEST,
                );
            }

            console.log(countryData)
            return await this.countriesRepository.insertCountry(countryData);
        } catch (error) {
            throw error;
        }
    }
    
}