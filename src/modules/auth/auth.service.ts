import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InputLogin } from 'src/graphql.schema';
import { verifyPassword } from '../../utils/bcrypt';
import { UsersRepository } from '../../repository/users.repository';
import { UsersAdministrativeRepository } from '../../repository/administrative.repository';

@Injectable()
export class AuthService {
  private logger: Logger = new Logger(AuthService.name);

  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
    @InjectRepository(UsersAdministrativeRepository) private usersAdministrativeRepository: UsersAdministrativeRepository,
  ) {}

  async login(params: InputLogin): Promise<any> {
    try {
      this.logger.debug(`login with params= ${JSON.stringify(params)}`);
      const { email, password } = params;

      if (!email) {
        throw new HttpException(
          'Param email is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (!password) {
        throw new HttpException(
          'Param password is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      const user = await this.usersRepository.getUserByEmail(email);

      if (!user) {
        throw new HttpException(
          `Users with email=${email} not exists`,
          HttpStatus.BAD_REQUEST,
        );
      }

      const matchPassword = await verifyPassword(password, user.passwordHash);
      
      if (matchPassword) {
        delete user.passwordHash;
        delete user.passwordSalt;
        
        const isAdministrative = await this.usersAdministrativeRepository.count({ where: { user: user.id }}) > 0 ? true : false;

        if (isAdministrative) {
          const administrative = await this.usersAdministrativeRepository.getUsersAdministrativesById(user.id);
          return { user: administrative, type: 'administrative' }
        }

        return { user, type: 'admin' }
      } else {
        throw new HttpException(
          `Run o password incorrect`,
          HttpStatus.BAD_REQUEST,
        );
      }
    } catch (error) {
      throw error;
    }
  }
}
