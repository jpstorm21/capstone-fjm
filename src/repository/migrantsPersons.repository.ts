import { Injectable } from '@nestjs/common';
import { MigrantPersons } from '../entities/migrantPersons.entity';
import { Repository, EntityRepository } from 'typeorm';
import { MigrantPerson, MigrantPersonData } from './../graphql.schema';
import { Countries } from 'src/entities';


@Injectable()
@EntityRepository(MigrantPersons)
export class MigrantsPersonRepository extends Repository<MigrantPersons> {
    public async getMigrantsPerson(): Promise<MigrantPerson[]> {
        try {
            return await this.find({
                relations: ['country'],
                where: { deletedAt: null }
            });
        } catch (error) {
            throw error;
        }
    }

    public async insertMigrantPerson(migrantPersonData: MigrantPersonData, country: Countries): Promise<MigrantPerson> {
        try {
            const { name, run, dni, passport, other, age, sex, levelStudy, civilStatus, birthDate, admissionDate, phone, email, address, visa, visaState, currentOccupation, profession, networksDescription, derivationDescription, chileanTies, residentTies, reasonConsultation, jobPlacement, typeIncome, studyValidationProcess, occupationCountryOrigen } = migrantPersonData;
            
            const migrant = new MigrantPersons();
            migrant.name = name;
            migrant.email = email;
            migrant.run = run;
            migrant.dni = dni;
            migrant.passport = passport;
            migrant.other = other;
            migrant.age = age;
            migrant.sex = sex;
            migrant.levelStudy = levelStudy;
            migrant.civilStatus = civilStatus;
            migrant.birthDate = birthDate;
            migrant.admissionDate = admissionDate;
            migrant.phone = phone;
            migrant.address = address;
            migrant.visa = visa;
            migrant.visaState = visaState;
            migrant.currentOccupation = currentOccupation;
            migrant.profession = profession;
            migrant.networksDescription = networksDescription;
            migrant.derivationDescription = derivationDescription;
            migrant.chileanTies = chileanTies;
            migrant.residentTies = residentTies;
            migrant.reasonConsultation = reasonConsultation;
            migrant.jobPlacement = jobPlacement;
            migrant.typeIncome = typeIncome;
            migrant.studyValidationProcess = studyValidationProcess;
            migrant.occupationCountryOrigen = occupationCountryOrigen;
            migrant.country = country;

            return await migrant.save();
        } catch (error) {
            throw error;
        }
    }

    public async getMigrantByRut(run: string): Promise<MigrantPerson> {
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
    public async getMigrantByDni(dni: string): Promise<MigrantPerson> {
        try {

            if (dni) {
                return await this.findOne({
                    where: { dni: dni, deletedAt: null },
                });
            }

        } catch (error) {
            throw error;
        }
    }
    public async getMigrantByPassport(passport: string): Promise<MigrantPerson> {
        try {

            if (passport) {
                return await this.findOne({
                    where: { passport: passport, deletedAt: null },
                });
            }

        } catch (error) {
            throw error;
        }
    }
    public async getMigrantByOther(other: string): Promise<MigrantPerson> {
        try {

            if (other) {
                return await this.findOne({
                    where: { other: other, deletedAt: null },
                });
            }

        } catch (error) {
            throw error;
        }
    }  

    public async getMigrantById(id: string): Promise<MigrantPerson> {
        try {
            return await this.findOne({
                where: { id: id, deletedAt: null },
            });
        } catch (error) {
            throw error;
        }
    }    

    public async deleteMigrant(migrant: MigrantPerson): Promise<MigrantPerson> {
        migrant.deletedAt = new Date();

        return await this.save(migrant);
    }

    public async editMigrant(migrant: MigrantPerson, migrantData: MigrantPersonData): Promise<MigrantPerson> {
        const { name, run, dni, passport, other, age, sex, levelStudy, civilStatus, birthDate, admissionDate, phone, email, address, visa, visaState, currentOccupation, profession, networksDescription, derivationDescription, chileanTies, residentTies, reasonConsultation, jobPlacement, typeIncome, studyValidationProcess, occupationCountryOrigen } = migrantData;

        migrant.name = name;
            migrant.email = email;
            migrant.run = run;
            migrant.dni = dni;
            migrant.passport = passport;
            migrant.other = other;
            migrant.age = age;
            migrant.sex = sex;
            migrant.levelStudy = levelStudy;
            migrant.civilStatus = civilStatus;
            migrant.birthDate = birthDate;
            migrant.admissionDate = admissionDate;
            migrant.phone = phone;
            migrant.address = address;
            migrant.visa = visa;
            migrant.visaState = visaState;
            migrant.currentOccupation = currentOccupation;
            migrant.profession = profession;
            migrant.networksDescription = networksDescription;
            migrant.derivationDescription = derivationDescription;
            migrant.chileanTies = chileanTies;
            migrant.residentTies = residentTies;
            migrant.reasonConsultation = reasonConsultation;
            migrant.jobPlacement = jobPlacement;
            migrant.typeIncome = typeIncome;
            migrant.studyValidationProcess = studyValidationProcess;
            migrant.occupationCountryOrigen = occupationCountryOrigen;

        return await this.save(migrant);
    }

    
}