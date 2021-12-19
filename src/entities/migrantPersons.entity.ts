import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Countries } from './countries.entity';
import { Records } from './records.entity';
import { Relatives } from './relatives.entity';

@Entity()
export class MigrantPersons extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: 'name', type: 'text', nullable: true })
    name: string

    @Column({ name: 'age', type: 'integer', nullable: true })
    age: number

    @Column({ name: 'run', type: 'text'})
    run: string

    @Column({ name: 'other', type: 'text'})
    other: string

    @Column({ name: 'level_study', type: 'text'})
    levelStudy: string

    @Column({ name: 'sex', type: 'text', nullable: true })
    sex: string

    @Column({ name: 'civil_status', type: 'text'})
    civilStatus: string

    @Column({ name: 'birth_date', type: 'date' })
    birthDate: Date

    @Column({ name: 'admission_date', type: 'date' })
    admissionDate: Date

    @Column({ name: 'dni', type: 'text' })
    dni: string

    @Column({ name: 'passport', type: 'text' })
    passport: string

    @Column({ name: 'phone', type: 'text' })
    phone: string

    @Column({ name: 'email', type: 'text' })
    email: string

    @Column({ name: 'address', type: 'text' })
    address: string

    @Column({ name: 'visa', type: 'text' })
    visa: string

    @Column({ name: 'visa_state', type: 'text' })
    visaState: string

    @Column({ name: 'current_occupation', type: 'text' })
    currentOccupation: string

    @Column({ name: 'profession', type: 'text' })
    profession: string

    @Column({ name: 'networks_description', type: 'text' })
    networksDescription: string

    @Column({ name: 'derivation_description', type: 'text' })
    derivationDescription: string

    @Column({ name: 'chilean_ties', type: 'text' })
    chileanTies: string

    @Column({ name: 'resident_ties', type: 'text' })
    residentTies: string

    @Column({ name: 'reason_consultation', type: 'text' })
    reasonConsultation: string

    @Column({ name: 'job_placement', type: 'text' })
    jobPlacement: string

    @Column({ name: 'type_income', type: 'text', nullable: true })
    typeIncome: string

    @Column({ name: 'study_validation_process', type: 'text' })
    studyValidationProcess: string

    @Column({ name: 'occupation_country_origen', type: 'text' })
    occupationCountryOrigen: string

    /* @Column({ name: 'id_country', type: 'uuid' })
    @JoinColumn({ name: 'id_country' })
    @ManyToOne(() => Countries)
    country: Countries; */

    @OneToMany(() => Records, (records) => records.migrantPerson)
    records: Records[]

    @OneToMany(() => Relatives, (relatives) => relatives.migrantPerson)
    relatives: Relatives[]

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: 'NOW' })
    createdAt: Date

    @UpdateDateColumn({ name: 'update_at', type: 'timestamp' })
    updatedAt: Date

    @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
    deletedAt: Date
}