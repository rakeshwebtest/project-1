import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    async getUsers(): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async getUser(_id: number): Promise<User[]> {
        return await this.usersRepository.find({
            select: ["name"],
            where: [{ "id": _id }]
        });
    }
    async checkUser(_email: string): Promise<User[]> {
        return await this.usersRepository.find({
            select: ["id","name"],
            where: [{ "email": _email }]
        });
    }

    async updateUser(user: User) {
        return await this.usersRepository.save(user)
    }

    async deleteUser(user: User) {
        this.usersRepository.delete(user);
    }
}