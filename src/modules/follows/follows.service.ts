import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Follo, FollowData } from 'src/graphql.schema';
import { FollowsRepository } from 'src/repository/follow.repository';
import { MigrantsPersonRepository } from 'src/repository/migrantsPersons.repository';
import { MigrantPersons } from './../../entities/migrantPersons.entity';
import { MigrantPerson } from './../../graphql.schema';

@Injectable()
export class FollowService {
  private logger: Logger = new Logger(FollowService.name);

  constructor(
    @InjectRepository(FollowsRepository)
    private followsRepository: FollowsRepository,
    @InjectRepository(MigrantsPersonRepository)
    private migrantsPersonRepository: MigrantsPersonRepository,
  ) {}

  async getFollows(): Promise<Follo[]> {
    try {
      this.logger.debug('getting follows');
      return await this.followsRepository.getFollows();
    } catch (error) {
      throw error;
    }
  }
  async getFollowsByMigrant(id: string ): Promise<Follo> {
    try {
      this.logger.debug('getting follows');
      return await this.followsRepository.getFollowMigrantById(id);
    } catch (error) {
      throw error;
    }
  }

  async createFollow(followData: FollowData): Promise<Follo> {
    try {
      this.logger.debug(`creating follow=${JSON.stringify(followData)}`);
      const { type, migrant } = followData;

      if (!type) {
        throw new HttpException(
          'Param type is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!migrant) {
        throw new HttpException(
          'Param migrant is undefined',
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

      const migrantById = await this.migrantsPersonRepository.findOne({
        where: { id: migrant, deletedAt: null },
      });
      console.log(migrantById);
      console.log(followData);
      return await this.followsRepository.insertFollow(followData, migrantById);
    } catch (error) {
      throw error;
    }
  }
}
