import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { GroupEntity } from './group.entity';

@Entity({ name: "user" })
export class UserEntity extends BaseEntity {

    @Column({ length: 25, nullable: true })
    name: string;

    @Column({ length: 25, nullable: true })
    firstName: string;

    @Column({ length: 25, nullable: true })
    lastName: string;

    @Column({ length: 25 })
    email: string;

    @Column({ length: 250, nullable: true })
    photoUrl: string;

    @Column({ length: 25, nullable: true })
    provider: string;

    @Column({ type: "text" })
    idToken: string;

    @Column({ length: 25, default: '' })
    profile_pic: string;

    @Column({ length: 25, default: '' })
    country: string;

    @OneToMany(type => GroupEntity, group => group.createdBy)
    groups: GroupEntity[];
}
