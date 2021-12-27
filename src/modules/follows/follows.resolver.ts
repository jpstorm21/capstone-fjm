import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Follo, FollowData } from 'src/graphql.schema';
import { FollowService } from './follows.service';
import { MigrantPerson } from './../../graphql.schema';

@Resolver('Follo')
export class FollowResolver {
  constructor(private readonly followService: FollowService) {}
  @Query('getFollows')
  async getFollows(): Promise<Follo[]> {
    return await this.followService.getFollows();
  }

  @Mutation('getFollowsByMigrant')
  async getFollowsByMigrant(@Args('id') args: string): Promise<Follo[]>{
    return await this.followService.getFollowsByMigrant(args);
  }

  @Mutation('createFollow')
  async createFollow(@Args('input') args: FollowData): Promise<Follo> {
    return await this.followService.createFollow(args);
  }
}
