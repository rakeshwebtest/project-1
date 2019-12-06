import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { UserEntity } from './user.entity';

@Entity({ name: "group" })
export class GroupEntity extends BaseEntity {

    @Column({ length: 25, nullable: true })
    name: string;

    @Column({ length: 25, default: '' })
    profile_pic: string;
    
    @ManyToOne(type => UserEntity, user => user.groups)
    createdBy: UserEntity;

}
