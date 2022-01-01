import { Injectable } from '@nestjs/common';
import { Follo, FollowData } from 'src/graphql.schema';
import { Repository, EntityRepository } from 'typeorm';
import { Follow } from './../entities/follow.entity';
import { MigrantPersons } from './../entities/migrantPersons.entity';

@Injectable()
@EntityRepository(Follow)
export class FollowsRepository extends Repository<Follow> {
  public async getFollows(): Promise<Follo[]> {
    try {
      return await this.find({
        relations: ['migrant'],
        where: { deletedAt: null },
      });
    } catch (error) {
      throw error;
    }
  }

  public async getFollowMigrantById(id: any): Promise<Follow[]> {
    try {
      return this.find({
        relations: ['migrant'],
        where: { deletedAt: null, migrant: id },
      });
    } catch (error) {
      throw error;
    }
  }
  public async getFollowById(id: string): Promise<Follo> {
    try {
      return await this.findOne({
        where: { id: id, deletedAt: null },
      });
    } catch (error) {
      throw error;
    }
  }


  public async insertFollow(
    followData: FollowData,
    migrantPerson: MigrantPersons,
  ): Promise<Follo> {
    try {
      const { type } = followData;

      const follow = new Follow();
      follow.type = type;
      follow.migrant = migrantPerson;

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
