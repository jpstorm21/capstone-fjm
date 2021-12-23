import { Injectable } from '@nestjs/common';
import { Country, CountryData } from 'src/graphql.schema';
import { Repository, EntityRepository } from 'typeorm';
import { Countries } from './../entities/countries.entity';

@Injectable()
@EntityRepository(Countries)
export class CountriesRepository extends Repository<Countries> {
  public async getCountries(): Promise<Country[]> {
    try {
      return await this.find({
        where: { deletedAt: null },
      });
    } catch (error) {
      throw error;
    }
  }

  public async insertCountry(countryData: CountryData): Promise<Country> {
    try {
      const { name } = countryData;

      const country = new Countries();
      country.name = name;

      return await country.save();
    } catch (error) {
      throw error;
    }
  }

  public async getCountriesByName(name: string): Promise<Country> {
    try {
      if (name) {
        return await this.findOne({
          where: { name: name, deletedAt: null },
        });
      }
    } catch (error) {
      throw error;
    }
  }
}
