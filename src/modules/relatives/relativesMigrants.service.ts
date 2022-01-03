import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MigrantsPersonRepository } from './../../repository/migrantsPersons.repository';
import { MigrantPerson, MigrantPersonData, Relative, RelativeData } from './../../graphql.schema';
import { CountriesRepository } from 'src/repository/countries.repository';
import { CampusRepository } from 'src/repository/campus.repository';
import { RelativesMigrantsRepository } from 'src/repository/relativesMigrants.repository';

@Injectable()
export class RelativeMigrantService {
  private logger: Logger = new Logger(RelativeMigrantService.name);

  constructor(
    @InjectRepository(RelativesMigrantsRepository)
    private relativesMigrantsRepository: RelativesMigrantsRepository,
    @InjectRepository(MigrantsPersonRepository)
    private migrantsPersonsRepository: MigrantsPersonRepository,
    
  ) {}

  async getRelativeMigrants(): Promise<Relative[]> {
    try {
      this.logger.debug('Getting relative Migrants ');
      return await this.relativesMigrantsRepository.getRelativesMigrants();
    } catch (error) {
      throw error;
    }
  }
  async getRelativeMigrantByMigrant(idMigrant: string): Promise<Relative[]> {
    try {
      this.logger.debug(`Getting Relative Migrant  by idMigrant = ${idMigrant}}`);
      return await this.relativesMigrantsRepository.getRelativeByMigrant(idMigrant);
    } catch (error) {
      throw error;
    }
  }

  async createRelativeMigrant(
    relativeData: RelativeData,
  ): Promise<Relative> {
    try {
      this.logger.debug(
        `creating relative=${JSON.stringify(relativeData)}`,
      );
      const {
        name,        
        age,
        sex,
        whatDoes,
        pathologies,
        withYou,
        migrantPerson       
      } = relativeData;

      if (!migrantPerson) {
        throw new HttpException(
          'Param migrantPerson is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }      
            

      const migrantById = await this.migrantsPersonsRepository.findOne({
          where: { id: migrantPerson, deletedAt: null},
      });
      
      console.log(migrantById);
      console.log(relativeData);
      return await this.relativesMigrantsRepository.insertRelativeMigrant(
        relativeData,
        migrantById
      );
    } catch (error) {
      throw error;
    }
  }

/*   async deleteMigrant(id: string): Promise<MigrantPerson> {
    try {
      this.logger.debug(`deleting migrant with id=${id}`);

      if (!id) {
        throw new HttpException(
          'Param id is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      const migrantById = await this.migrantsPersonsRepository.getMigrantById(
        id,
      );

      if (!migrantById) {
        throw new HttpException(
          `Migrant with id=${id} not exists`,
          HttpStatus.BAD_REQUEST,
        );
      }

      const migrant = await this.migrantsPersonsRepository.deleteMigrant(
        migrantById,
      );

      return migrant;
    } catch (error) {
      throw error;
    }
  } */

  /* async editRelativeMigrant(
    id: string,
    relativeData: RelativeData,
  ): Promise<Relative> {
    try {
      this.logger.debug(
        `updating relativeMigrant with data=${JSON.stringify(relativeData)}`,
      );
      const {
        name,        
        age,
        sex,
        whatDoes,
        withYou,
        pathologies ,
        migrantPerson   
      } = relativeData;

      if (!migrantPerson) {
        throw new HttpException(
          'Param id is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }           

      const migrantById = await this.relativesMigrantsRepository.findOne({
        where: { id: migrantPerson, deletedAt: null },
      });    

      if (!migrantPerson) {
        return await this.relativesMigrantsRepository.editRelativeMigrant(
            
          migrantById,
          
        );
      }
    } catch (error) {
      throw error;
    }
  }*/
}
 