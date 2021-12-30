import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Follo, FollowData, State, StateData } from 'src/graphql.schema';
import { FollowsRepository } from 'src/repository/follow.repository';
import { MigrantsPersonRepository } from 'src/repository/migrantsPersons.repository';
import { StateRepository } from 'src/repository/states.repository';
import { MigrantPersons } from './../../entities/migrantPersons.entity';
import { MigrantPerson } from './../../graphql.schema';

@Injectable()
export class StateService {
  private logger: Logger = new Logger(StateService.name);

  constructor(
    @InjectRepository(StateRepository)
    private stateRepository: StateRepository,   
    
  ) {}

  async getStates(): Promise<State[]> {
    try {
      this.logger.debug('getting states');
      return await this.stateRepository.getStates();
    } catch (error) {
      throw error;
    }
  }
  /* async getFollowsByMigrant(id: string ): Promise<Follo[]> {
    try {
      this.logger.debug('getting follows');
      return await this.followsRepository.getFollowMigrantById(id);
    } catch (error) {
      throw error;
    }
  } */

  async createState(stateData: StateData): Promise<State> {
    try {
      this.logger.debug(`creating state=${JSON.stringify(stateData)}`);
      const { type, typeNumber } = stateData;

      if (!type) {
        throw new HttpException(
          'Param type is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }      

      /* const followBytype = await this.followsRepository.getFollowByType(type);

            if (followBytype) {
                throw new HttpException(
                    `follow with type=${type} exists`,
                    HttpStatus.BAD_REQUEST,
                );
            } */

           
      console.log(stateData);
      return await this.stateRepository.insertState(stateData);
    } catch (error) {
      throw error;
    }
  }
}
