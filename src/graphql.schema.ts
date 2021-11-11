
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class UserData {
    run: string;
    name: string;
    email: string;
    password?: string;
}

export abstract class IQuery {
    abstract getUsers(): User[] | Promise<User[]>;
}

export abstract class IMutation {
    abstract createUser(input?: UserData): User | Promise<User>;

    abstract editUser(id?: string, input?: UserData): User | Promise<User>;

    abstract changeState(id?: string): User | Promise<User>;

    abstract deleteUser(id?: string): User | Promise<User>;

    abstract changePassword(id?: string, password?: string): User | Promise<User>;
}

export class User {
    id: string;
    name: string;
    run: string;
    email: string;
    passwordHash: string;
    passwordSalt: string;
    state: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
