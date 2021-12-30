import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from '../../repository/users.repository';
import { UsersAdministrativeRepository } from 'src/repository/administrative.repository';
import { UsersAdminRepository } from 'src/repository/admin.repository';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { LoginUnionResolver } from './loginUnionResolver.resolver';
import { JwtModule } from '@nestjs/jwt';

import * as dotenv from 'dotenv';

dotenv.config();

const { JWT_SECRET } = process.env;

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersRepository, UsersAdministrativeRepository, UsersAdminRepository]),
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: '4h' },
    }),
  ],
  providers: [AuthResolver, AuthService, LoginUnionResolver],
})
export class AuthModule {}
