import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UsersRepository } from '../../repository/users.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([UsersRepository])
    ],
    providers: [UsersResolver, UsersService]
})

export class UsersModule {};