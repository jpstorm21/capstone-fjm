import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MigrantsPersonRepository } from './../../repository/migrantsPersons.repository';
import { FollowState, FollowStateData, MigrantPerson, MigrantPersonData } from './../../graphql.schema';
import { CountriesRepository } from 'src/repository/countries.repository';
import { CampusRepository } from 'src/repository/campus.repository';
import { FollowStateRepository } from 'src/repository/followState.repository';
import { FollowsRepository } from 'src/repository/follow.repository';
import { StateRepository } from 'src/repository/states.repository';
import { FollowData } from 'src/graphql.schema';

@Injectable()
export class FollowStatesService {
  private logger: Logger = new Logger(FollowStatesService.name);

  constructor(
    @InjectRepository(FollowStateRepository)
    private followStateRepository: FollowStateRepository,
    @InjectRepository(FollowsRepository)    
    private followsRepository: FollowsRepository,
    @InjectRepository(StateRepository)
    private stateRepository: StateRepository
  ) {}

  async getFollowStates(): Promise<FollowState[]> {
    try {
      this.logger.debug('Getting follow states');
      return await this.followStateRepository.getFollowStates();
    } catch (error) {
      throw error;
    }
  }
  async getFollowStateById(idFollow: string, idState: string): Promise<FollowState> {
    try {
      this.logger.debug(`Getting follow state by idFollow = ${idFollow} and idState = ${idState}`);
      return await this.followStateRepository.getFollowStateById(idFollow,idState);
    } catch (error) {
      throw error;
    }
  }
  async getFollowStateByIdFollow(idFollow: string): Promise<FollowState[]> {
    try {
      this.logger.debug(`Getting follow state by idFollow = ${idFollow} `);
      return await this.followStateRepository.getFollowStateByIdFollow(idFollow);
    } catch (error) {
      throw error;
    }
  }

  async createFollowState(
    followStateData: FollowStateData,
  ): Promise<FollowState> {
    try {
      this.logger.debug(
        `creating followState=${JSON.stringify(followStateData)}`,
      );
      const {
        follow,
        state,
        date,
        comments
      } = followStateData;

      if (!follow) {
        throw new HttpException(
          'Param follow is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (!state) {
        throw new HttpException(
          'Param state is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (!date) {
        throw new HttpException(
          'Param date is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (!comments) {
        throw new HttpException(
          'Param comments is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }    
     

      
      

      const followById = await this.followsRepository.findOne({
        where: { id: follow, deletedAt: null },
      });
      const stateById = await this.stateRepository.findOne({
        where: { id: state, deletedAt: null },
      });
      console.log(followById);
      console.log(stateById);
      console.log(followStateData);
      return await this.followStateRepository.insertFollowState(followStateData,followById, stateById);
    } catch (error) {
      throw error;
    }
  }

  /* async deleteMigrant(id: string): Promise<MigrantPerson> {
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

  /* async editFollowState(
    idFollow: string,
    idState: string,
    followStateData: FollowStateData,
  ): Promise<FollowData> {
    try {
      this.logger.debug(
        `updating followState with data=${JSON.stringify(followStateData)}`,
      );
      const {
          follow,
          state,
          comments,
          date,

      } = followStateData;

      if (!idFollow) {
        throw new HttpException(
          'Param idFollow is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!idState) {
        throw new HttpException(
          'Param idState is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (!comments) {
        throw new HttpException(
          'Param comments is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (!date) {
        throw new HttpException(
          'Param date is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }      

      const followStateById = await this.followStateRepository.getFollowStateById(idFollow,idState);

      const followById = await this.followsRepository.getFollowById(idFollow);

      const stateById = await this.stateRepository.getStateById(idState);

      if (!followStateById) {
        throw new HttpException(
          `Migrant with idFollow=${idFollow} and idState= ${idState} not exists`,
          HttpStatus.BAD_REQUEST,
        );
      }

      
      if (followStateById) {         
          return await this.followStateRepository.editFollowState(followStateById, followStateData, followById, stateById)
        
      }

    } catch (error) {
      throw error;
    }
  } */
}
