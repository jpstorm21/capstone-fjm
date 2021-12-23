import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CountriesService } from './countries.service';
import { Country, CountryData } from 'src/graphql.schema';

@Resolver('Country')
export class CountriesResolver {
  constructor(private readonly countriesService: CountriesService) {}
  @Query('getCountries')
  async getCountries(): Promise<Country[]> {
    return await this.countriesService.getCountries();
  }

  @Mutation('createCountry')
  async createCountry(@Args('input') args: CountryData): Promise<Country> {
    return await this.countriesService.createCountry(args);
  }
}
