import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
} from 'typeorm';
import { Users } from './users.entity';

@Entity()
export class SuperAdmins extends BaseEntity {
  @Column({ name: 'id_admin', type: 'uuid', primary: true })
  @JoinColumn({ name: 'id_admin' })
  @OneToOne(() => Users)
  user: Users;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: 'NOW' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: Date;
}
