import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Administrative, User, UserData } from 'src/graphql.schema';
import { UsersRepository } from '../../repository/users.repository';
import { CampusRepository } from 'src/repository/campus.repository';
import { UsersAdministrativeRepository } from 'src/repository/administrative.repository';

@Injectable()
export class UsersService {
  private logger: Logger = new Logger(UsersService.name);

  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
    @InjectRepository(CampusRepository)
    private campusRepository: CampusRepository,
    @InjectRepository(UsersAdministrativeRepository)
    private usersAdministrativeRepository: UsersAdministrativeRepository,
  ) {}

  async getUsers(): Promise<User[]> {
    try {
      this.logger.debug('Getting Users');
      return await this.usersRepository.getUsers();
    } catch (error) {
      throw error;
    }
  }
  async getAdministratives(): Promise<Administrative[]> {
    try {
      this.logger.debug('Getting Users Administrative');
      return await this.usersAdministrativeRepository.getUsersAdministratives();
    } catch (error) {
      throw error;
    }
  }

  async createUser(userData: UserData): Promise<Administrative> {
    try {
      this.logger.debug(`creating administrative=${JSON.stringify(userData)}`);
      const { name, run, password, email, campus } = userData;

      if (!name) {
        throw new HttpException(
          'Param name is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (!run) {
        throw new HttpException(
          'Param run is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (!password) {
        throw new HttpException(
          'Param contraseña is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (!email) {
        throw new HttpException(
          'Param email is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!campus) {
        throw new HttpException(
          'Param campus is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      const userByRut = await this.usersRepository.getUserByRut(run);

      if (userByRut) {
        throw new HttpException(
          `Users with run=${run} exists`,
          HttpStatus.BAD_REQUEST,
        );
      }

      const userByEmail = await this.usersRepository.getUserByEmail(email);

      if (userByEmail) {
        throw new HttpException(
          `Users with email=${email} exists`,
          HttpStatus.BAD_REQUEST,
        );
      }

      const campusById = await this.campusRepository.findOne({
        where: { id: campus, deletedAt: null },
      });

      const user = await this.usersRepository.insertUser(userData);

      return await this.usersAdministrativeRepository.insertAdministrative(
        user,
        campusById,
      );
    } catch (error) {
      throw error;
    }
  }

  async changeState(id: string): Promise<Administrative> {
    try {
      this.logger.debug(`changing state user with id=${id}`);

      if (!id) {
        throw new HttpException(
          'Param id is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      const userById = await this.usersRepository.getUserById(id);

      if (!userById) {
        throw new HttpException(
          `Users with id=${id} not exists`,
          HttpStatus.BAD_REQUEST,
        );
      }

      const user = await this.usersRepository.changeState(userById);

      return this.usersAdministrativeRepository.getUsersAdministrativesById(
        user.id,
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id: string): Promise<Administrative> {
    try {
      this.logger.debug(`deleting user with id=${id}`);

      if (!id) {
        throw new HttpException(
          'Param id is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      const userById = await this.usersRepository.getUserById(id);

      if (!userById) {
        throw new HttpException(
          `Users with id=${id} not exists`,
          HttpStatus.BAD_REQUEST,
        );
      }

      const user = await this.usersRepository.deleteUser(userById);

      return this.usersAdministrativeRepository.getUsersAdministrativesById(
        user.id,
      );
    } catch (error) {
      throw error;
    }
  }

  async editUser(id: string, userData: UserData): Promise<Administrative> {
    try {
      this.logger.debug(
        `updating administrative with data=${JSON.stringify(userData)}`,
      );
      const { name, run, email, campus } = userData;

      if (!id) {
        throw new HttpException(
          'Param id is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (!name) {
        throw new HttpException(
          'Param name is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (!run) {
        throw new HttpException(
          'Param run is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (!email) {
        throw new HttpException(
          'Param email is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!campus) {
        throw new HttpException(
          'Param campus is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      const userById = await this.usersRepository.getUserById(id);

      if (!userById) {
        throw new HttpException(
          `Users with id=${id} not exists`,
          HttpStatus.BAD_REQUEST,
        );
      }

      const userByRut = await this.usersRepository.getUserByRut(run);
      const userByEmail = await this.usersRepository.getUserByEmail(email);
      const administrativeById =
        await this.usersAdministrativeRepository.findOne({
          where: { user: id, deletedAt: null },
        });

      const campusById = await this.campusRepository.findOne({
        where: { id: campus, deletedAt: null },
      });

      if (userByEmail && userByRut) {
        if (userById.id === userByEmail.id && userByRut.id === userById.id) {
          await this.usersRepository.editUser(userById, userData);
          return await this.usersAdministrativeRepository.editAdministrative(
            campusById,
            administrativeById,
          );
        }
      }

      if (userByEmail && userByRut) {
        if (userById.id !== userByEmail.id && userByRut.id !== userById.id) {
          throw new HttpException(
            `Users with email=${email} or run=${run} exists`,
            HttpStatus.BAD_REQUEST,
          );
        }
      }

      if (userByEmail && userById.id === userByEmail.id && !userByRut) {
        await this.usersRepository.editUser(userById, userData);
        return await this.usersAdministrativeRepository.editAdministrative(
          campusById,
          administrativeById,
        );
      }

      if (userByEmail && userById.id !== userByEmail.id && !userByRut) {
        throw new HttpException(
          `Users with email=${email} exists`,
          HttpStatus.BAD_REQUEST,
        );
      }

      if (userByRut && userById.id === userByRut.id && !userByEmail) {
        await this.usersRepository.editUser(userById, userData);
        return await this.usersAdministrativeRepository.editAdministrative(
          campusById,
          administrativeById,
        );
      }

      if (userByRut && userById.id !== userByRut.id && !userByEmail) {
        throw new HttpException(
          `Users with run=${run} exists`,
          HttpStatus.BAD_REQUEST,
        );
      }

      if (userByEmail && userByRut) {
        if (userById.id === userByEmail.id && userByRut.id !== userById.id) {
          throw new HttpException(
            `Users with run=${run} exists`,
            HttpStatus.BAD_REQUEST,
          );
        }
      }

      if (userByEmail && userByRut) {
        if (userById.id !== userByEmail.id && userByRut.id === userById.id) {
          throw new HttpException(
            `Users with email=${email} existe`,
            HttpStatus.BAD_REQUEST,
          );
        }
      }

      if (!userByEmail && !userByRut) {
        await this.usersRepository.editUser(userById, userData);
        return await this.usersAdministrativeRepository.editAdministrative(
          campusById,
          administrativeById,
        );
      }
    } catch (error) {
      throw error;
    }
  }

  async changePassword(id: string, password: string): Promise<Administrative> {
    try {
      this.logger.debug(`chnage password user with id=${id}`);

      if (!id) {
        throw new HttpException(
          'Param id is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (!password) {
        throw new HttpException(
          'Param idUsuario is undefined',
          HttpStatus.BAD_REQUEST,
        );
      }

      const userById = await this.usersRepository.findOne({
        where: { id: id, deletedAt: null },
      });

      if (!userById) {
        throw new HttpException(
          `Usuario con id ${id} no existe`,
          HttpStatus.BAD_REQUEST,
        );
      }

      const user = await this.usersRepository.changePassword(
        userById,
        password,
      );

      return this.usersAdministrativeRepository.getUsersAdministrativesById(
        user.id,
      );
    } catch (error) {
      throw error;
    }
  }
}
