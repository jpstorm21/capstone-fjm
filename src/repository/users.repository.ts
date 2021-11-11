import { Injectable } from '@nestjs/common';
import { User, UserData } from 'src/graphql.schema';
import { Repository, EntityRepository } from 'typeorm';
import { Users } from '../entities/users.entity';
import { encryptPassword } from '../utils/bcrypt';

@Injectable()
@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {
    public async getUsers(): Promise<User[]> {
        try {
            return await this.find({
                where: { deletedAt: null }
            });
        } catch (error) {
            throw error;
        }
    }

    public async insertUser(userData: UserData): Promise<User> {
        try {
            const { name, run, password, email } = userData;
            const [passwordHash, passworSalt] = await encryptPassword(password);

            const user = new Users();
            user.name = name;
            user.email = email;
            user.run = run;
            user.passwordHash = passwordHash;
            user.passwordSalt = passworSalt;
            user.state = false;

            return await user.save();
        } catch (error) {
            throw error;
        }
    }

    public async getUserByRut(run: string): Promise<User> {
        try {

            if (run) {
                return await this.findOne({
                    where: { run: run, deletedAt: null },
                });
            }

        } catch (error) {
            throw error;
        }
    }

    public async getUserByEmail(email: string): Promise<User> {
        try {

            if (email) {
                return await this.findOne({
                    where: { email: email, deletedAt: null },
                });
            }

        } catch (error) {
            throw error;
        }
    }

    public async getUserById(id: string): Promise<User> {
        try {
            return await this.findOne({
                where: { id: id, deletedAt: null },
            });
        } catch (error) {
            throw error;
        }
    }

    public async changeState(user: User): Promise<User> {
        user.state = !user.state;

        return await this.save(user);
    }

    public async deleteUser(user: User): Promise<User> {
        user.deletedAt = new Date();

        return await this.save(user);
    }

    public async editUser(user: User, userData: UserData): Promise<User> {
        const { name, run, email } = userData;

        user.name = name;
        user.email = email;
        user.run = run;

        return await this.save(user);
    }

    public async changePassword(user: Users, password: string): Promise<Users> {
        const [passwordHash, passworSalt] = await encryptPassword(password);

        user.passwordHash = passwordHash;
        user.passwordSalt = passworSalt;

        return await this.save(user);
    }
}