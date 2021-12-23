import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { Administratives } from './administratives.entity';

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', type: 'text', nullable: false })
  name: string;

  @Column({ name: 'run', type: 'text', nullable: false })
  run: string;

  @Column({ name: 'email', type: 'text', nullable: false })
  email: string;

  @Column({ name: 'state', type: 'boolean', nullable: false })
  state: boolean;

  @Column({ name: 'password_hash', type: 'text', nullable: false })
  passwordHash: string;

  @Column({ name: 'password_salt', type: 'text', nullable: false })
  passwordSalt: string;

  @OneToMany(() => Administratives, (administrative) => administrative.user)
  administrative: Administratives[];

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: 'NOW' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_at', type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: Date;
}
