import { Injectable } from '@nestjs/common';
import { Administrative } from 'src/graphql.schema';
import { Repository, EntityRepository } from 'typeorm';
import { Administratives } from '../entities/administratives.entity';
import { Users } from '../entities/users.entity';
import { Campus } from '../entities/campus.entity';
import { UsersRepository } from './users.repository';

@Injectable()
@EntityRepository(Administratives)
export class UsersAdministrativeRepository extends Repository<Administratives> {
  public async getUsersAdministratives(): Promise<Administrative[]> {
    try {
      return this.find({
        relations: ['user', 'campus'],
        where: { deletedAt: null },
      });
    } catch (error) {
      throw error;
    }
  }

  public async getUsersAdministrativesById(id: any): Promise<Administrative> {
    try {
      return this.findOne({
        relations: ['user', 'campus'],
        where: { deletedAt: null, user: id },
      });
    } catch (error) {
      throw error;
    }
  }

  public async insertAdministrative(
    user: Users,
    campus: Campus,
  ): Promise<Administrative> {
    const administrative = new Administratives();
    administrative.campus = campus;
    administrative.user = user;
    const administrativeToInsert = await administrative.save();

    return await this.getUsersAdministrativesById(administrativeToInsert.user);
  }

  public async editAdministrative(
    campus: Campus,
    administrative: Administratives,
  ): Promise<Administrative> {
    const response = await this.createQueryBuilder()
      .update()
      .set({
        campus: campus,
      })
      .where('id_administrative = :id_admin', {
        id_admin: administrative.user,
      })
      .returning('*')
      .execute();

    const administrativeToEdit = response.raw[0];

    return await this.getUsersAdministrativesById(
      administrativeToEdit.id_administrative,
    );
  }
}
