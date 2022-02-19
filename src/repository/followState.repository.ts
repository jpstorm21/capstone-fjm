import { Injectable } from '@nestjs/common';
import { MigrantPersons } from '../entities/migrantPersons.entity';
import { Repository, EntityRepository } from 'typeorm';
import { MigrantPerson, MigrantPersonData, FollowState, FollowStateData } from './../graphql.schema';
import { Campus, Countries, Follow, States } from 'src/entities';
import { FollowStates } from './../entities/followStates.entity';

@Injectable()
@EntityRepository(FollowStates)
export class FollowStateRepository extends Repository<FollowStates> {
  public async getFollowStates(): Promise<FollowState[]> {
    try {
      return await this.find({
        relations: ['follow', 'state'],
        where: { deletedAt: null },
      });
    } catch (error) {
      throw error;
    }
  }

  public async insertFollowState(
    followStateData: FollowStateData,
    follow: Follow,
    state: States
  ): Promise<FollowState> {
    try {
      const {
        date,
        comments
      } = followStateData;

      const followState = new FollowStates();
      followState.comments = comments;
      followState.date = date;
      followState.follow = follow;
      followState.state = state;

      return await followState.save();
    } catch (error) {
      throw error;
    }
  }

  public async getFollowStateById(idFollow: string, idState: string): Promise<FollowState> {
    try {
      if (idFollow && idState) {
        return await this.findOne({
            relations: ['follow', 'state'],
          where: { follow: idFollow, state: idState, deletedAt: null },
        });
      }
    } catch (error) {
      throw error;
    }
  }  
  public async getFollowStateByIdFollow(idFollow: string): Promise<FollowState[]> {
    try {
      if (idFollow ) {
        return await this.find({
            relations: ['follow', 'state'],
          where: { follow: idFollow, deletedAt: null },
        });
      }
    } catch (error) {
      throw error;
    }
  }  
  

  public async deleteFollowState(followState: FollowState): Promise<FollowState> {
    followState.deletedAt = new Date();

    return await this.save(followState);
  }

  public async editFollowState(
    followState: FollowState,
    followStateData: FollowStateData, 
    follow: Follow,
    state: States   
  ): Promise<FollowState> {
    const {
      comments,
      date      
    } = followStateData;

    followState.comments= comments;
    followState.date= date;
    followState.follow= follow;
    followState.state= state;

    return await this.save(followState);
  }
}
