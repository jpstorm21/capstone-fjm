import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Follo, FollowData } from 'src/graphql.schema';
import { FollowService } from './follows.service';


@Resolver('Follo')
export class FollowResolver {
    constructor(
        private readonly followService: FollowService,        
    ) {}    
    @Query("getFollows")
    async getFollows(): Promise<Follo[]>{
        return await this.followService.getFollows();
    }

    @Mutation('createFollow')
    async createFollow(@Args('input') args: FollowData): Promise<Follo> {
        return await this.followService.createFollow(args);
    }
}