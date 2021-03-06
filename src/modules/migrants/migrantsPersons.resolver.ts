import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MigrantsPersonsService } from './migrantsPersons.service';
import { MigrantPerson, MigrantPersonData } from './../../graphql.schema';
import { JwtAuthGuard } from 'src/security/guards/jwt-auth.guard';




@UseGuards(JwtAuthGuard)
@Resolver()
export class MigrantsPersonsResolver {
  constructor(
    private readonly migrantsPersonsService: MigrantsPersonsService,
  ) {}

  @Query('getMigrantsPersons')
  async getMigrantsPersons(): Promise<MigrantPerson[]> {
    return await this.migrantsPersonsService.getMigrantsPerson();
  }
  @Mutation('getMigrantsPersonsName')
  async getMigrantsPersonsName(@Args('name') name: string): Promise<MigrantPerson> {
    return await this.migrantsPersonsService.getMigrantsPersonName(name);
  }

  @Mutation('createMigrantPerson')
  async createMigrantPerson(
    @Args('input') args: MigrantPersonData,
  ): Promise<MigrantPerson> {
    return await this.migrantsPersonsService.createMigrantPerson(args);
  }

  @Mutation('deleteMigrantPerson')
  async deleteMigrantPerson(@Args('id') id: string): Promise<MigrantPerson> {
    return await this.migrantsPersonsService.deleteMigrant(id);
  }

  @Mutation('editMigrantPerson')
  async editMigrantPerson(
    @Args('id') id: string,
    @Args('input') args: MigrantPersonData,
  ): Promise<MigrantPerson> {
    return await this.migrantsPersonsService.editMigrantPerson(id, args);
  }
}
