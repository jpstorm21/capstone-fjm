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
import { FollowStates } from './followStates.entity';

@Entity()
export class States extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'type', type: 'text', nullable: true })
  type: string;

  @OneToMany(() => FollowStates, (followStates) => followStates.state)
  followStates: FollowStates[];

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: 'NOW' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_at', type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: Date;
}
