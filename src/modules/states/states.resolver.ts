import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {  State, StateData } from 'src/graphql.schema';
import { StateService } from './states.service';
import { JwtAuthGuard } from 'src/security/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(JwtAuthGuard)
@Resolver('State')
export class StateResolver {
  constructor(private readonly stateService: StateService) {}
  @Query('getStates')
  async getStates(): Promise<State[]> {
    return await this.stateService.getStates();
  }

  /* @Mutation('getFollowsByMigrant')
  async getFollowsByMigrant(@Args('id') args: string): Promise<Follo[]>{
    return await this.followService.getFollowsByMigrant(args);
  } */

  @Mutation('createState')
  async createState(@Args('input') args: StateData): Promise<State> {
    return await this.stateService.createState(args);
  }
}
