import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { FollowStates } from './followStates.entity';
import { MigrantPersons } from './migrantPersons.entity';

@Entity()
export class Follow extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'type', type: 'text', nullable: true })
  type: string;

  @OneToMany(() => FollowStates, (followStates) => followStates.follow)
  followStates: FollowStates[];

  @Column({ name: 'id_migrants', type: 'uuid' })
  @JoinColumn({ name: 'id_migrant' })
  @ManyToOne(() => MigrantPersons)
  migrant: MigrantPersons;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: 'NOW' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_at', type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: Date;
}
