import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: "meetings" })
export class Meeting extends BaseEntity {

    @Column({ length: 25 })
    name: string;

    @Column({ type: "text" })
    description: string;

    @Column({ length: 25 })
    location: string;


}
