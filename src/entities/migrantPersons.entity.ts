import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Countries } from './countries.entity';
import { Records } from './records.entity';
import { Relatives } from './relatives.entity';
import { Follow } from './follow.entity';

@Entity()
export class MigrantPersons extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', type: 'text' })
  name: string;

  @Column({ name: 'age', type: 'integer' })
  age: number;

  @Column({ name: 'run', type: 'text', nullable: true })
  run: string;

  @Column({ name: 'other', type: 'text', nullable: true })
  other: string;

  @Column({ name: 'level_study', type: 'text', nullable: true })
  levelStudy: string;

  @Column({ name: 'sex', type: 'text' })
  sex: string;

  @Column({ name: 'civil_status', type: 'text', nullable: true })
  civilStatus: string;

  @Column({ name: 'birth_date', type: 'date', nullable: true })
  birthDate: Date;

  @Column({ name: 'admission_date', type: 'date', nullable: true })
  admissionDate: Date;

  @Column({ name: 'dni', type: 'text', nullable: true })
  dni: string;

  @Column({ name: 'passport', type: 'text', nullable: true })
  passport: string;

  @Column({ name: 'phone', type: 'text', nullable: true })
  phone: string;

  @Column({ name: 'email', type: 'text', nullable: true })
  email: string;

  @Column({ name: 'address', type: 'text', nullable: true })
  address: string;

  @Column({ name: 'visa', type: 'text', nullable: true })
  visa: string;

  @Column({ name: 'visa_state', type: 'text', nullable: true })
  visaState: string;

  @Column({ name: 'current_occupation', type: 'text', nullable: true })
  currentOccupation: string;

  @Column({ name: 'profession', type: 'text', nullable: true })
  profession: string;

  @Column({ name: 'networks_description', type: 'text', nullable: true })
  networksDescription: string;

  @Column({ name: 'derivation_description', type: 'text', nullable: true })
  derivationDescription: string;

  @Column({ name: 'chilean_ties', type: 'text', nullable: true })
  chileanTies: string;

  @Column({ name: 'resident_ties', type: 'text', nullable: true })
  residentTies: string;

  @Column({ name: 'reason_consultation', type: 'text', nullable: true })
  reasonConsultation: string;

  @Column({ name: 'job_placement', type: 'text', nullable: true })
  jobPlacement: string;

  @Column({ name: 'type_income', type: 'text' })
  typeIncome: string;

  @Column({ name: 'study_validation_process', type: 'text', nullable: true })
  studyValidationProcess: string;

  @Column({ name: 'occupation_country_origen', type: 'text', nullable: true })
  occupationCountryOrigen: string;

  @Column({ name: 'id_country', type: 'uuid' })
  @JoinColumn({ name: 'id_country' })
  @ManyToOne(() => Countries)
  country: Countries;

  @OneToMany(() => Follow, (follow) => follow.migrant)
  follow: Follow[];

  @OneToMany(() => Records, (records) => records.migrantPerson)
  records: Records[];

  @OneToMany(() => Relatives, (relatives) => relatives.migrantPerson)
  relatives: Relatives[];

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: 'NOW' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_at', type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: Date;
}
