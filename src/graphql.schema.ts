
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class InputLogin {
    email: string;
    password: string;
}

export class VenueData {
    name: string;
}

export class CountryData {
    name: string;
}

export class FollowStateData {
    follow: string;
    state: string;
    date: Date;
    comments: string;
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
    campus: string;
}

export class RelativeData {
    name: string;
    sex: string;
    age: number;
    whatDoes: string;
    pathologies: string;
    withYou: string;
    relationship: string;
    migrantPerson: string;
}

export class StateData {
    type: string;
    typeNumber: number;
}

export class UserData {
    run: string;
    name: string;
    email: string;
    password?: string;
    campus: string;
}

export abstract class IMutation {
    abstract login(input?: InputLogin): LoginResult | Promise<LoginResult>;

    abstract refreshToken(): LoginResult | Promise<LoginResult>;

    abstract createVenue(input?: VenueData): Venue | Promise<Venue>;

    abstract createCountry(input?: CountryData): Country | Promise<Country>;

    abstract getFollowStateById(idFollow?: string, idState?: string): FollowState | Promise<FollowState>;

    abstract getFollowStateByIdFollow(idFollow?: string): FollowState[] | Promise<FollowState[]>;

    abstract createFollowState(input?: FollowStateData): FollowState | Promise<FollowState>;

    abstract editFollowState(idFollow?: string, idState?: string, input?: FollowStateData): FollowState | Promise<FollowState>;

    abstract deleteFollowState(idFollow?: string, idState?: string): FollowState | Promise<FollowState>;

    abstract createFollow(input?: FollowData): Follo | Promise<Follo>;

    abstract getFollowsByMigrant(id?: string): Follo[] | Promise<Follo[]>;

    abstract getMigrantsPersonsName(name?: string): MigrantPerson | Promise<MigrantPerson>;

    abstract createMigrantPerson(input?: MigrantPersonData): MigrantPerson | Promise<MigrantPerson>;

    abstract editMigrantPerson(id?: string, input?: MigrantPersonData): MigrantPerson | Promise<MigrantPerson>;

    abstract deleteMigrantPerson(id?: string): MigrantPerson | Promise<MigrantPerson>;

    abstract getRelativeMigrantByMigrants(id?: string): Relative[] | Promise<Relative[]>;

    abstract createRelativeMigrant(input?: RelativeData): Relative | Promise<Relative>;

    abstract editRelativeMigrant(id?: string, input?: RelativeData): Relative | Promise<Relative>;

    abstract deleteRelativeMigrant(id?: string): Relative | Promise<Relative>;

    abstract createState(input?: StateData): State | Promise<State>;

    abstract getStatesByMigrant(id?: string): State[] | Promise<State[]>;

    abstract createAdminstrative(input?: UserData): Administrative | Promise<Administrative>;

    abstract editAdminstrative(id?: string, input?: UserData): Administrative | Promise<Administrative>;

    abstract changeState(id?: string): Administrative | Promise<Administrative>;

    abstract deleteAdminstrativer(id?: string): Administrative | Promise<Administrative>;

    abstract changePassword(id?: string, password?: string): Administrative | Promise<Administrative>;
}

export class LoginResponseAdministrative {
    token: string;
    administrative?: Administrative;
    type: string;
}

export class LoginResponseAdmin {
    token: string;
    admin?: Admin;
    type: string;
}

export abstract class IQuery {
    abstract getCampus(): Venue[] | Promise<Venue[]>;

    abstract getCountries(): Country[] | Promise<Country[]>;

    abstract getFollowStates(): FollowState[] | Promise<FollowState[]>;

    abstract getFollows(): Follo[] | Promise<Follo[]>;

    abstract getMigrantsPersons(): MigrantPerson[] | Promise<MigrantPerson[]>;

    abstract getRelativeMigrants(): Relative[] | Promise<Relative[]>;

    abstract getStates(): State[] | Promise<State[]>;

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

export class FollowState {
    follow: Follo;
    state: State;
    date: Date;
    comments: string;
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
    campus: Venue;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

export class Relative {
    id: string;
    name: string;
    sex: string;
    age: number;
    whatDoes: string;
    pathologies: string;
    withYou: string;
    relationship: string;
    migrantPerson: MigrantPerson;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

export class State {
    id: string;
    type: string;
    typeNumber: number;
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

export class Admin {
    user: User;
}

export type LoginResult = LoginResponseAdministrative | LoginResponseAdmin;
