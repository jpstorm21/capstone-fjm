import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Relative, RelativeData } from './../../graphql.schema';
import { JwtAuthGuard } from 'src/security/guards/jwt-auth.guard';
import { RelativeMigrantService } from './relativesMigrants.service';




@UseGuards(JwtAuthGuard)
@Resolver()
export class RelativesMigrantsResolver {
  constructor(
    private readonly relativeMigrantsService: RelativeMigrantService,
  ) {}

  @Query('getRelativeMigrants')
  async getRelativeMigrants(): Promise<Relative[]> {
    return await this.relativeMigrantsService.getRelativeMigrants();
  }
  @Mutation('getRelativeMigrantByMigrants')
  async getRelativeMigrantByMigrants(@Args('id') id: string): Promise<Relative[]> {
    return await this.relativeMigrantsService.getRelativeMigrantByMigrant(id);
  }

  @Mutation('createRelativeMigrant')
  async createRelativeMigrant(
    @Args('input') args: RelativeData,
  ): Promise<Relative> {
    return await this.relativeMigrantsService.createRelativeMigrant(args);
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
