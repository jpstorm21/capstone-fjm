import { Injectable } from '@nestjs/common';
import { Follo, FollowData } from 'src/graphql.schema';
import { Repository, EntityRepository } from 'typeorm';
import { Follow } from './../entities/follow.entity';


@Injectable()
@EntityRepository(Follow)
export class FollowsRepository extends Repository<Follow> {
    public async getFollows(): Promise<Follo[]> {
        try {
            return await this.find({
                where: { deletedAt: null }
            });
        } catch (error) {
            throw error;
        }
    }

    public async insertFollow(followData: FollowData): Promise<Follo> {
        try {
            const { type } = followData;           

            const follow = new Follow();
            follow.type = type;            

            return await follow.save();
        } catch (error) {
            throw error;
        }
    }

    public async getFollowByType(type: string): Promise<Follo> {
        try {
            if (type) {
                return await this.findOne({
                    where: { type: type, deletedAt: null },
                });
            }
        } catch (error) {
            throw error;
        }
    }
}