import { BaseEntity, Column, Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Follow } from './follow.entity';
import { States } from './states.entity';

@Entity()
export class FollowStates extends BaseEntity {
    @Column({ name: 'id_follow', type: 'uuid', primary: true})
    @JoinColumn({ name: 'id_follow'})
    @ManyToOne(() => Follow)
    follow: Follow

    @Column({ name: 'id_state', type: 'uuid', primary: true})
    @JoinColumn({ name: 'id_state'})
    @ManyToOne(() => States)
    state: States

    @Column({ name: 'date', type: 'date' })
    date: Date

    @Column({ name: 'comments', type: 'text' })
    comments: string

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: 'NOW' })
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updatedAt: Date

    @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
    deletedAt: Date
}