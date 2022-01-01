import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FollowState, FollowStateData } from './../../graphql.schema';
import { JwtAuthGuard } from 'src/security/guards/jwt-auth.guard';
import { FollowStatesService } from './followState.service';




@UseGuards(JwtAuthGuard)
@Resolver()
export class FollowStateResolver {
  constructor(
    private readonly FollowStatesService: FollowStatesService,
  ) {}

  @Query('getFollowStates')
  async getFollowStates(): Promise<FollowState[]> {
    return await this.FollowStatesService.getFollowStates();
  }
  @Mutation('getFollowStateById')
  async getFollowStateById(@Args('idFollow') idFollow: string, @Args('idState') idState: string): Promise<FollowState> {
    return await this.FollowStatesService.getFollowStateById(idFollow,idState);
  }

  @Mutation('createFollowState')
  async createFollowState(
    @Args('input') args: FollowStateData,
  ): Promise<FollowState> {
    return await this.FollowStatesService.createFollowState(args);
  }

  /* @Mutation('deleteMigrantPerson')
  async deleteMigrantPerson(@Args('id') id: string): Promise<MigrantPerson> {
    return await this.migrantsPersonsService.deleteMigrant(id);
  } */

  /* @Mutation('editMigrantPerson')
  async editMigrantPerson(
    @Args('id') id: string,
    @Args('input') args: MigrantPersonData,
  ): Promise<MigrantPerson> {
    return await this.migrantsPersonsService.editMigrantPerson(id, args);
  } */
}
