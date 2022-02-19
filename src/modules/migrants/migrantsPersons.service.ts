import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MigrantsPersonRepository } from './../../repository/migrantsPersons.repository';
import { MigrantPerson, MigrantPersonData } from './../../graphql.schema';
import { CountriesRepository } from 'src/repository/countries.repository';
import { CampusRepository } from 'src/repository/campus.repository';

@Injectable()
export class MigrantsPersonsService {
  private logger: Logger = new Logger(MigrantsPersonsService.name);

  constructor(
    @InjectRepository(MigrantsPersonRepository)
    private migrantsPersonsRepository: MigrantsPersonRepository,
    @InjectRepository(CountriesRepository)    
    private countriesRepository: CountriesRepository,
    @InjectRepository(CampusRepository)
    private campusRepository: CampusRepository
  ) {}

  async getMigrantsPerson(): Promise<MigrantPerson[]> {
    try {
      this.logger.debug('Getting Migrants Persons');
      return await this.migrantsPersonsRepository.getMigrantsPerson();
    } catch (error) {
      throw error;
    }
  }
  async getMigrantsPersonName(name: string): Promise<MigrantPerson> {
    try {
      this.logger.debug(`Getting Migrant Person by name = ${name}`);
      return await this.migrantsPersonsRepository.getMigrantByName(name);
    } catch (error) {
      throw error;
    }
  }

  async createMigrantPerson(
    migrantPersonData: MigrantPersonData,
  ): Promise<MigrantPerson> {
    try {
      this.logger.debug(
        `creating migrant=${JSON.stringify(migrantPersonData)}`,
      );
      const {
        name,
        run,
        dni,
        passport,
        other,
        age,
        sex,
        levelStudy,
        civilStatus,
        birthDate,
        admissionDate,
        phone,
        email,
        address,
        visa,
        visaState,
        currentOccupation,
        profession,
        networksDescription,
        derivationDescription,
        chileanTies,
        residentTies,
        reasonConsultation,
        jobPlacement,
        typeIncome,
        studyValidationProcess,
        occupationCountryOrigen,
        country,
        campus
      } = migrantPersonData;

      if (!name) {
        throw new HttpException(
          'Param name is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (!age) {
        throw new HttpException(
          'Param age is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (!sex) {
        throw new HttpException(
          'Param sex is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (!typeIncome) {
        throw new HttpException(
          'Param typeIncome is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!country) {
        throw new HttpException(
          'Param country is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!campus) {
        throw new HttpException(
          'Param country is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      const migrantByRut = await this.migrantsPersonsRepository.getMigrantByRut(
        run,
      );

      if (migrantByRut) {
        throw new HttpException(
          `Migrant with run=${run} exists`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const migrantByPassport =
        await this.migrantsPersonsRepository.getMigrantByPassport(passport);

      if (migrantByPassport) {
        throw new HttpException(
          `Migrant with passport=${passport} exists`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const migrantByDni = await this.migrantsPersonsRepository.getMigrantByDni(
        dni,
      );

      if (migrantByDni) {
        throw new HttpException(
          `Migrant with dni=${dni} exists`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const getMigrantByOther =
        await this.migrantsPersonsRepository.getMigrantByOther(other);

      if (getMigrantByOther) {
        throw new HttpException(
          `Migrant with other=${other} exists`,
          HttpStatus.BAD_REQUEST,
        );
      }

      const countryById = await this.countriesRepository.findOne({
        where: { id: country, deletedAt: null },
      });
      const campusById = await this.campusRepository.findOne({
        where: { id: campus, deletedAt: null },
      });
      console.log(countryById);
      console.log(migrantPersonData);
      return await this.migrantsPersonsRepository.insertMigrantPerson(
        migrantPersonData,
        countryById,
        campusById
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteMigrant(id: string): Promise<MigrantPerson> {
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
  }

  async editMigrantPerson(
    id: string,
    migrantData: MigrantPersonData,
  ): Promise<MigrantPerson> {
    try {
      this.logger.debug(
        `updating migrant with data=${JSON.stringify(migrantData)}`,
      );
      const {
        name,
        run,
        dni,
        passport,
        other,
        age,
        sex,
        levelStudy,
        civilStatus,
        birthDate,
        admissionDate,
        phone,
        email,
        address,
        visa,
        visaState,
        currentOccupation,
        profession,
        networksDescription,
        derivationDescription,
        chileanTies,
        residentTies,
        reasonConsultation,
        jobPlacement,
        typeIncome,
        studyValidationProcess,
        occupationCountryOrigen,
        country,
        campus
      } = migrantData;

      if (!id) {
        throw new HttpException(
          'Param id is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (!name) {
        throw new HttpException(
          'Param name is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (!age) {
        throw new HttpException(
          'Param age is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (!sex) {
        throw new HttpException(
          'Param sex is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!typeIncome) {
        throw new HttpException(
          'Param typeIncome is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!typeIncome) {
        throw new HttpException(
          'Param typeIncome is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!country) {
        throw new HttpException(
          'Param country is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!campus) {
        throw new HttpException(
          'Param campus is undefined',
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

      const countryById = await this.countriesRepository.findOne({
        where: { id: country, deletedAt: null },
      });
      const campusById = await this.campusRepository.findOne({
        where: { id: campus, deletedAt: null },
      });

      const migrantByRut = await this.migrantsPersonsRepository.getMigrantByRut(
        run,
      );
      const migrantByPassport =
        await this.migrantsPersonsRepository.getMigrantByPassport(passport);

      if (migrantByPassport && migrantByRut) {
        if (
          migrantById.id === migrantByPassport.id &&
          migrantByRut.id === migrantById.id
        ) {
          return await this.migrantsPersonsRepository.editMigrant(
            migrantById,
            migrantData,
            countryById,
            campusById
          );
        }
      }

      if (migrantByPassport && migrantByRut) {
        if (
          migrantById.id !== migrantByPassport.id &&
          migrantByRut.id !== migrantById.id
        ) {
          throw new HttpException(
            `Users with passport=${passport} or run=${run} exists`,
            HttpStatus.BAD_REQUEST,
          );
        }
      }

      if (
        migrantByPassport &&
        migrantById.id === migrantByPassport.id &&
        !migrantByRut
      ) {
        return await this.migrantsPersonsRepository.editMigrant(
          migrantById,
          migrantData,
          countryById,
          campusById
        );
      }

      if (
        migrantByPassport &&
        migrantById.id !== migrantByPassport.id &&
        !migrantByRut
      ) {
        throw new HttpException(
          `Users with email=${passport} exists`,
          HttpStatus.BAD_REQUEST,
        );
      }

      if (
        migrantByRut &&
        migrantById.id === migrantByRut.id &&
        !migrantByPassport
      ) {
        return await this.migrantsPersonsRepository.editMigrant(
          migrantById,
          migrantData,
          countryById,
          campusById
        );
      }

      if (
        migrantByRut &&
        migrantById.id !== migrantByRut.id &&
        !migrantByPassport
      ) {
        throw new HttpException(
          `Users with run=${run} exists`,
          HttpStatus.BAD_REQUEST,
        );
      }

      if (migrantByPassport && migrantByRut) {
        if (
          migrantById.id === migrantByPassport.id &&
          migrantByRut.id !== migrantById.id
        ) {
          throw new HttpException(
            `Users with run=${run} exists`,
            HttpStatus.BAD_REQUEST,
          );
        }
      }

      if (migrantByPassport && migrantByRut) {
        if (
          migrantById.id !== migrantByPassport.id &&
          migrantByRut.id === migrantById.id
        ) {
          throw new HttpException(
            `Users with passport=${passport} existe`,
            HttpStatus.BAD_REQUEST,
          );
        }
      }

      if (!migrantByPassport && !migrantByRut) {
        return await this.migrantsPersonsRepository.editMigrant(
          migrantById,
          migrantData,
          countryById,
          campusById
        );
      }
    } catch (error) {
      throw error;
    }
  }
}
