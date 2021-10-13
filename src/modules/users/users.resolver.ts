import { Resolver, Query } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from 'src/graphql.schema';

@Resolver()
export class UsersResolver {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Query('getUsers')
    async getUsers(): Promise<User[]> {
        return await this.usersService.getUsers();
    }
}