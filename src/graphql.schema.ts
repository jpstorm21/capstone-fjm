
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class InputLogin {
    run: string;
    password: string;
}

export class VenueData {
    name: string;
}

export class CountryData {
    name: string;
}

export class MigrantPersonData {
    name: string;
    run: string;
    dni: string;
    passport: string;
    other: string;
    age: number;
    sex: string;
    levelStudy: string;
    civilStatus: string;
    birthDate: Date;
    admissionDate: Date;
    phone: string;
    email: string;
    address: string;
    visa: string;
    visaState: string;
    currentOccupation: string;
    profession: string;
    networksDescription: string;
    derivationDescription: string;
    chileanTies: string;
    residentTies: string;
    reasonConsultation: string;
    jobPlacement: string;
    typeIncome: string;
    studyValidationProcess: string;
    occupationCountryOrigen: string;
}

export class UserData {
    run: string;
    name: string;
    email: string;
    password?: string;
}

export abstract class IMutation {
    abstract login(input?: InputLogin): LoginResponse | Promise<LoginResponse>;

    abstract createVenue(input?: VenueData): Venue | Promise<Venue>;

    abstract createCountry(input?: CountryData): Country | Promise<Country>;

    abstract createMigrantPerson(input?: MigrantPersonData): MigrantPerson | Promise<MigrantPerson>;

    abstract editMigrantPerson(id?: string, input?: MigrantPersonData): MigrantPerson | Promise<MigrantPerson>;

    abstract deleteMigrantPerson(id?: string): MigrantPerson | Promise<MigrantPerson>;

    abstract createUser(input?: UserData): User | Promise<User>;

    abstract editUser(id?: string, input?: UserData): User | Promise<User>;

    abstract changeState(id?: string): User | Promise<User>;

    abstract deleteUser(id?: string): User | Promise<User>;

    abstract changePassword(id?: string, password?: string): User | Promise<User>;
}

export class LoginResponse {
    token: string;
    user?: User;
}

export abstract class IQuery {
    abstract getCampus(): Venue[] | Promise<Venue[]>;

    abstract getCountries(): Country[] | Promise<Country[]>;

    abstract getMigrantsPersons(): MigrantPerson[] | Promise<MigrantPerson[]>;

    abstract getUsers(): User[] | Promise<User[]>;
}

export class Venue {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

export class Country {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

export class MigrantPerson {
    id: string;
    name: string;
    run: string;
    dni: string;
    passport: string;
    other: string;
    age: number;
    sex: string;
    levelStudy: string;
    civilStatus: string;
    birthDate: Date;
    admissionDate: Date;
    phone: string;
    email: string;
    address: string;
    visa: string;
    visaState: string;
    currentOccupation: string;
    profession: string;
    networksDescription: string;
    derivationDescription: string;
    chileanTies: string;
    residentTies: string;
    reasonConsultation: string;
    jobPlacement: string;
    typeIncome: string;
    studyValidationProcess: string;
    occupationCountryOrigen: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
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
