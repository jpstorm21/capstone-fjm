import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: 'name', type: 'text', nullable: true })
    name: string

    @Column({ name: 'run', type: 'text', nullable: true })
    run: string

    @Column({ name: 'email', type: 'text', nullable: true })
    email: string

    @Column({ name: 'state', type: 'boolean', nullable: true })
    state: boolean

    @Column({ name: 'password_hash', type: 'text', nullable: true })
    passwordHash: string

    @Column({ name: 'password_salt', type: 'text', nullable: true })
    passwordSalt: string

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: 'NOW' })
    createdAt: Date

    @UpdateDateColumn({ name: 'update_at', type: 'timestamp' })
    updatedAt: Date

    @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
    deletedAt: Date
}