import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CampusRepository } from 'src/repository/campus.repository';
import { Venue, VenueData } from 'src/graphql.schema';


@Injectable()
export class CampusService {
    private logger: Logger = new Logger(CampusService.name);

    constructor(
        @InjectRepository(CampusRepository) private campusRepository: CampusRepository
    ) { }

    async getCampus(): Promise<Venue[]>{
        try {
            this.logger.debug('getting campus');
            return await this.campusRepository.getCampus();
        } catch (error) {
            throw error
        }
    }

    async createVenue(venueData: VenueData): Promise<Venue> {
        try {
            this.logger.debug(`creating venue=${JSON.stringify(venueData)}`);
            const { name } = venueData;
            
            if (!name) {
                throw new HttpException(
                    'Param name is undefined',
                    HttpStatus.BAD_REQUEST,
                );
            }           
            
            const campusByName = await this.campusRepository.getCampusByName(name);
           
            if (campusByName) {
                throw new HttpException(
                    `Venue with name=${name} exists`,
                    HttpStatus.BAD_REQUEST,
                );
            }

            console.log(venueData)
            return await this.campusRepository.insertVenue(venueData);
        } catch (error) {
            throw error;
        }
    }
    
}