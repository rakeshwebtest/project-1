import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../entities/user.entity';

@Controller('user')
export class UsersController {

    constructor(private service: UsersService) { }

    @Get()
    async getUser() {
        const data: any = await this.service.getUsers();
        return { message: "ok", data: data };
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getUser(params.id);
    }

    @Post()
    async create(@Body() user: User) {
        // check user
        const _user:User[] = await this.service.checkUser(user.email);
        if(_user.length > 0){
            user.id = _user[0].id;
        }
        const data = await this.service.updateUser(user);
        return { message: "save susc", data: data };
    }

    @Put()
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}