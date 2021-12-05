import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { MigrantPersons } from './migrantPersons.entity';

@Entity()
export class Relatives extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: 'name', type: 'text', nullable: true })
    name: string

    @Column({ name: 'run', type: 'text', nullable: true })
    run: string

    @Column({ name: 'sex', type: 'text', nullable: true })
    sex: string

    @Column({ name: 'passport', type: 'text', nullable: true })
    passport: string

    @Column({ name: 'relationship', type: 'text', nullable: true })
    relationship: string
    
    @Column({ name: 'age', type: 'integer', nullable: true })
    age: Number

    @Column({ name: 'id_migrant_person', type: 'uuid' })
    @JoinColumn({ name: 'id_migrant_person' })
    @ManyToOne(() => MigrantPersons)
    migrantPerson: MigrantPersons;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: 'NOW' })
    createdAt: Date

    @UpdateDateColumn({ name: 'update_at', type: 'timestamp' })
    updatedAt: Date

    @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
    deletedAt: Date
}