import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserData } from 'src/graphql.schema';
import { UsersRepository } from '../../repository/users.repository';

@Injectable()
export class UsersService {
    private logger: Logger = new Logger(UsersService.name);

    constructor(
        @InjectRepository(UsersRepository) private usersRepository: UsersRepository
    ) {}

    async getUsers(): Promise<User[]> {
        try {
            this.logger.debug('Getting Users');
            return await this.usersRepository.getUsers();
        } catch (error) {
            throw error;
        }
    }

    async createUser(userData: UserData): Promise<User> {
        try {
            this.logger.debug(`creating user=${JSON.stringify(userData)}`);
            const { name, run, password, email } = userData;

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
            console.log(userData)
            return await this.usersRepository.insertUser(userData);
        } catch (error) {
            throw error;
        }
    }

    async changeState(id: string): Promise<User> {
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

            return user;
        } catch (error) {
            throw error;
        }
    }

    async deleteUser(id: string): Promise<User> {
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

            return user;
        } catch (error) {
            throw error;
        }
    }

    async editUser(id: string, userData: UserData): Promise<User> {
        try {
            this.logger.debug(`updating user with data=${JSON.stringify(userData)}`);
            const { name, run, email, } = userData;

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

            const userById = await this.usersRepository.getUserById(id);

            if (!userById) {
                throw new HttpException(
                    `Users with id=${id} not exists`,
                    HttpStatus.BAD_REQUEST,
                );
            }

            const userByRut = await this.usersRepository.getUserByRut(run);
            const userByEmail = await this.usersRepository.getUserByEmail(email);

            if (userByEmail && userByRut) {
                if (userById.id === userByEmail.id && userByRut.id === userById.id) {
                    return await this.usersRepository.editUser(userById, userData);
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
                return await this.usersRepository.editUser(userById, userData);
            }

            if (userByEmail && userById.id !== userByEmail.id && !userByRut) {
                throw new HttpException(
                    `Users with email=${email} exists`,
                    HttpStatus.BAD_REQUEST,
                );
            }

            if (userByRut && userById.id === userByRut.id && !userByEmail) {
                return await this.usersRepository.editUser(userById, userData);
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
                return await this.usersRepository.editUser(userById, userData);
            }

        } catch (error) {
            throw error;
        }
    }

    async changePassword(id: string, password: string): Promise<User> {
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

            return await this.usersRepository.changePassword(userById, password);

        } catch (error) {
            throw error;
        }
    }
}