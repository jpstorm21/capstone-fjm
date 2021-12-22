import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UsersRepository } from '../../repository/users.repository';
import { CampusRepository } from 'src/repository/campus.repository';
import { UsersAdministrativeRepository } from 'src/repository/administrative.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([UsersRepository, CampusRepository, UsersAdministrativeRepository])
    ],
    providers: [UsersResolver, UsersService]
})

export class UsersModule {};