import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CampusService } from './campus.service';
import { Venue, VenueData } from 'src/graphql.schema';
import { JwtAuthGuard } from 'src/security/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(JwtAuthGuard)
@Resolver('Campus')
export class CampusResolver {
  constructor(private readonly campusService: CampusService) {}
  @Query('getCampus')
  async getCampus(): Promise<Venue[]> {
    return await this.campusService.getCampus();
  }

  @Mutation('createVenue')
  async createVenue(@Args('input') args: VenueData): Promise<Venue> {
    return await this.campusService.createVenue(args);
  }
}
