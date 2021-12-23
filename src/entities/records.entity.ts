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
} from 'typeorm';
import { MigrantPersons } from './migrantPersons.entity';

@Entity()
export class Records extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string;

  @Column({ name: 'date_record', type: 'date', nullable: true })
  date_record: Date;

  @Column({ name: 'id_migrant_person', type: 'uuid' })
  @JoinColumn({ name: 'id_migrant_person' })
  @ManyToOne(() => MigrantPersons)
  migrantPerson: MigrantPersons;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: 'NOW' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_at', type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: Date;
}
