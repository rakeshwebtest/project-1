import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: "user" })
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    name: string;

    @Column({ length: 25 })
    firstName: string;

    @Column({ length: 25 })
    lastName: string;

    @Column({ length: 25 })
    email: string;

    @Column({ length: 250 })
    photoUrl: string;

    @Column({ length: 25 })
    provider: string;

    @Column({ type: "text" })
    idToken: string;

    @Column({ length: 25, default: '' })
    profile_pic: string;

    @Column({ length: 25, default: '' })
    country: string;
}
