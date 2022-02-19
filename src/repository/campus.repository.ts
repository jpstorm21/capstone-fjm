import { Injectable } from '@nestjs/common';
import { Venue, VenueData } from 'src/graphql.schema';
import { Repository, EntityRepository } from 'typeorm';
import { Campus } from '../entities/campus.entity';

@Injectable()
@EntityRepository(Campus)
export class CampusRepository extends Repository<Campus> {
  public async getCampus(): Promise<Venue[]> {
    try {
      return await this.find({
        where: { deletedAt: null },
      });
    } catch (error) {
      throw error;
    }
  }

  public async insertVenue(venueData: VenueData): Promise<Venue> {
    try {
      const { name } = venueData;

      const campus = new Campus();
      campus.name = name;

      return await campus.save();
    } catch (error) {
      throw error;
    }
  }

  public async getCampusByName(name: string): Promise<Venue> {
    try {
      if (name) {
        return await this.findOne({
          where: { name: name, deletedAt: null },
        });
      }
    } catch (error) {
      throw error;
    }
  }
}
