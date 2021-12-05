import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';
import { Administratives } from './administratives.entity';

@Entity()
export class Campus extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: 'name', type: 'text', nullable: true })
    name: string

    @OneToMany(() => Administratives, (administrative) => administrative.campus)
    administrative: Administratives[]

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: 'NOW' })
    createdAt: Date

    @UpdateDateColumn({ name: 'update_at', type: 'timestamp' })
    updatedAt: Date

    @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
    deletedAt: Date
}