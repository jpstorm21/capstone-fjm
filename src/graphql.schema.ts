
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

export class FollowData {
    type: string;
    migrant: string;
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
    country: string;
}

export class UserData {
    run: string;
    name: string;
    email: string;
    password?: string;
    campus: string;
}

export abstract class IMutation {
    abstract login(input?: InputLogin): LoginResponse | Promise<LoginResponse>;

    abstract createVenue(input?: VenueData): Venue | Promise<Venue>;

    abstract createCountry(input?: CountryData): Country | Promise<Country>;

    abstract createFollow(input?: FollowData): Follo | Promise<Follo>;

    abstract getFollowsByMigrant(id?: string): Follo[] | Promise<Follo[]>;

    abstract getMigrantsPersonsName(name?: string): MigrantPerson | Promise<MigrantPerson>;

    abstract createMigrantPerson(input?: MigrantPersonData): MigrantPerson | Promise<MigrantPerson>;

    abstract editMigrantPerson(id?: string, input?: MigrantPersonData): MigrantPerson | Promise<MigrantPerson>;

    abstract deleteMigrantPerson(id?: string): MigrantPerson | Promise<MigrantPerson>;

    abstract createAdminstrative(input?: UserData): Administrative | Promise<Administrative>;

    abstract editAdminstrative(id?: string, input?: UserData): Administrative | Promise<Administrative>;

    abstract changeState(id?: string): Administrative | Promise<Administrative>;

    abstract deleteAdminstrativer(id?: string): Administrative | Promise<Administrative>;

    abstract changePassword(id?: string, password?: string): Administrative | Promise<Administrative>;
}

export class LoginResponse {
    token: string;
    user?: User;
}

export abstract class IQuery {
    abstract getCampus(): Venue[] | Promise<Venue[]>;

    abstract getCountries(): Country[] | Promise<Country[]>;

    abstract getFollows(): Follo[] | Promise<Follo[]>;

    abstract getMigrantsPersons(): MigrantPerson[] | Promise<MigrantPerson[]>;

    abstract getUsers(): User[] | Promise<User[]>;

    abstract getAdministrative(): Administrative[] | Promise<Administrative[]>;
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

export class Follo {
    id: string;
    type: string;
    migrant: MigrantPerson;
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
    birthDate?: Date;
    admissionDate?: Date;
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
    country: Country;
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

export class Administrative {
    user: User;
    campus: Venue;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
