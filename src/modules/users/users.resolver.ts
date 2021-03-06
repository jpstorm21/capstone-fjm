import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { Administrative, User, UserData } from 'src/graphql.schema';
import { JwtAuthGuard } from 'src/security/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query('getUsers')
  async getUsers(): Promise<User[]> {
    return await this.usersService.getUsers();
  }

  @Query('getAdministrative')
  async getAdministrative(): Promise<Administrative[]> {
    return await this.usersService.getAdministratives();
  }

  @Mutation('createAdminstrative')
  async createUser(@Args('input') args: UserData): Promise<Administrative> {
    return await this.usersService.createUser(args);
  }

  @Mutation('changeState')
  async changeState(@Args('id') id: string): Promise<Administrative> {
    return await this.usersService.changeState(id);
  }

  @Mutation('deleteAdminstrativer')
  async deleteUser(@Args('id') id: string): Promise<Administrative> {
    return await this.usersService.deleteUser(id);
  }

  @Mutation('editAdminstrative')
  async editUser(
    @Args('id') id: string,
    @Args('input') args: UserData,
  ): Promise<Administrative> {
    return await this.usersService.editUser(id, args);
  }

  @Mutation('changePassword')
  async changePassword(
    @Args('id') id: string,
    @Args('password') password: string,
  ): Promise<Administrative> {
    return await this.usersService.changePassword(id, password);
  }
}
