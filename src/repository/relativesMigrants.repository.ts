import { Injectable } from '@nestjs/common';
import { MigrantPersons } from '../entities/migrantPersons.entity';
import { Repository, EntityRepository } from 'typeorm';
import { MigrantPerson, MigrantPersonData, Relative, RelativeData } from './../graphql.schema';
import { Campus, Countries, Relatives } from 'src/entities';

@Injectable()
@EntityRepository(Relatives)
export class RelativesMigrantsRepository extends Repository<Relatives> {
  public async getRelativesMigrants(): Promise<Relative[]> {
    try {
      return await this.find({
        relations: ['migrantPerson'],
        where: { deletedAt: null },
      });
    } catch (error) {
      throw error;
    }
  }

  public async insertRelativeMigrant(
    relativeData: RelativeData,
    migrantPerson: MigrantPersons
  ): Promise<Relative> {
    try {
      const {
        name,        
        age,
        sex,
        whatDoes,
        pathologies,
        withYou,
        relationship       
      } = relativeData;

      const relative = new Relatives();
      relative.name = name;
      relative.age = age;
      relative.sex = sex;
      relative.whatDoes = whatDoes;
      relative.pathologies = pathologies;
      relative.withYou = withYou;
      relative.relationship = relationship;
      relative.migrantPerson = migrantPerson;

      return await relative.save();
    } catch (error) {
      throw error;
    }
  }

  public async getRelativeByMigrant(idMigrant: string): Promise<Relative[]> {
    try {
      if (idMigrant) {
        return await this.find({
          where: { migrantPerson: idMigrant , deletedAt: null },
        });
      }
    } catch (error) {
      throw error;
    }
  }  
  /* public async getMigrantByName(name: string): Promise<MigrantPerson> {
    try {
      if (name) {
        return await this.findOne({
          where: { name: name, deletedAt: null },
        });
      }
    } catch (error) {
      throw error;
    }
  } */

  /* public async getMigrantById(id: string): Promise<MigrantPerson> {
    try {
      return await this.findOne({
        where: { id: id, deletedAt: null },
      });
    } catch (error) {
      throw error;
    }
  } */

  /* public async deleteMigrant(migrant: MigrantPerson): Promise<MigrantPerson> {
    migrant.deletedAt = new Date();

    return await this.save(migrant);
  } */

  public async editRelativeMigrant(
      relative: Relative,
      relativeData: RelativeData,
      migrant: MigrantPerson,
      
  ): Promise<Relative> {
    const {
        name,        
        age,
        sex,
        whatDoes,
        pathologies,
        withYou,   
        relationship
    } = relativeData;
    
    relative.name = name;
    relative.age = age;
    relative.sex = sex;
    relative.whatDoes = whatDoes;
    relative.pathologies = pathologies;
    relative.withYou = withYou;
    relative.relationship = relationship;
    relative.migrantPerson = migrant;

    return await this.save(relative);
  }
}
