import { BaseEntity, Column, Entity, JoinColumn,  CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne, ManyToOne } from 'typeorm';
import { Users } from './users.entity';
import { Campus } from './campus.entity';

@Entity()
export class Administratives extends BaseEntity {
    @Column({ name: 'id_administrative', type: 'uuid', primary: true })
    @JoinColumn({ name: 'id_administrative' })
    @ManyToOne(() => Users)
    user: Users

    @Column({ name: 'id_campus', type: 'uuid' })
    @JoinColumn({ name: 'id_campus' })
    @ManyToOne(() => Campus)
    campus: Campus;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: 'NOW' })
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updatedAt: Date

    @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
    deletedAt: Date
}