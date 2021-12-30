import { Injectable } from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';
import { SuperAdmins } from '../entities/superAdmins.entity';

@Injectable()
@EntityRepository(SuperAdmins)
export class UsersAdminRepository extends Repository<SuperAdmins> {
    public async getUsersAdminById(id: any): Promise<SuperAdmins> {
        try {
            return this.findOne({
                relations: ['user'],
                where: { deletedAt: null, user: id },
            });
        } catch (error) {
            throw error;
        }
    }
}
