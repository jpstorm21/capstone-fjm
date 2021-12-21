import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Follo, FollowData } from 'src/graphql.schema';
import { FollowsRepository } from 'src/repository/follow.repository';


@Injectable()
export class FollowService {
    private logger: Logger = new Logger(FollowService.name);

    constructor(
        @InjectRepository(FollowsRepository) private followsRepository: FollowsRepository
    ) { }

    async getFollows(): Promise<Follo[]>{
        try {
            this.logger.debug('getting follows');
            return await this.followsRepository.getFollows();
        } catch (error) {
            throw error
        }
    }

    async createFollow(followData: FollowData): Promise<Follo> {
        try {
            this.logger.debug(`creating follow=${JSON.stringify(followData)}`);
            const { type } = followData;

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

            console.log(followData)
            return await this.followsRepository.insertFollow(followData);
        } catch (error) {
            throw error;
        }
    }
    
}