// base.entity.ts
import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, BeforeUpdate } from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;


    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    created: Date;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    updated: Date;

    @BeforeUpdate()
    updateTimestamp() {
        this.updated = new Date;
    }

}