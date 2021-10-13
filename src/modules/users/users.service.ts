import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/graphql.schema';
import { UsersRepository } from '../../repository/users.repository';

@Injectable()
export class UsersService {
    private logger: Logger = new Logger(UsersService.name);

    constructor(
        @InjectRepository(UsersRepository) private usersRepository: UsersRepository
    ) {}

    async getUsers(): Promise<User[]> {
        try {
            this.logger.debug('Getting Users');
            return await this.usersRepository.getUsers();
        } catch (error) {
            throw error;
        }
    }
}