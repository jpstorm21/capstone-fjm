import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User, UserData } from 'src/graphql.schema';
import { JwtAuthGuard } from 'src/security/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Resolver()
export class UsersResolver {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Query('getUsers')
    async getUsers(): Promise<User[]> {
        return await this.usersService.getUsers();
    }

    @Mutation('createUser')
    async createUser(@Args('input') args: UserData): Promise<User> {
        return await this.usersService.createUser(args);
    }

    @Mutation('changeState')
    async changeState(@Args('id') id: string): Promise<User> {
        return await this.usersService.changeState(id);
    }

    @Mutation('deleteUser')
    async deleteUser(@Args('id') id: string): Promise<User> {
        return await this.usersService.deleteUser(id);
    }

    @Mutation('editUser')
    async editUser(@Args('id') id: string, @Args('input') args: UserData): Promise<User> {
        return await this.usersService.editUser(id, args);
    }

    @Mutation('changePassword')
    async changePassword(@Args('id') id: string, @Args('password') password: string): Promise<User> {
        return await this.usersService.changePassword(id, password);
    }
}