import { Injectable } from '@nestjs/common';
import { User } from 'src/graphql.schema';
import { Repository, EntityRepository } from 'typeorm';
import { Users } from '../entities/users.entity';

@Injectable()
@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {
    public async getUsers(): Promise<User[]> {
        try {
            return await this.find({
                where: { deleteAt: null }
            });
        } catch (error) {
            throw error;
        }
    }
}