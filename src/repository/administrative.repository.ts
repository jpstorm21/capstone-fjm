import { Injectable } from '@nestjs/common';
import { Administrative } from 'src/graphql.schema';
import { Repository, EntityRepository } from 'typeorm';
import { Administratives } from '../entities/administratives.entity';


@Injectable()
@EntityRepository(Administratives)
export class UsersAdministrativeRepository extends Repository<Administratives> {
    public async getUsersAdministratives(): Promise<Administrative[]> {
        try {
            return this.find({
                relations: ['user', 'campus'],
                where: {deletedAt: null}
            })
        } catch (error) {
            throw error;
        }
    }

    

   
}