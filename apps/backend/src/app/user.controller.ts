import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class UserController {
  constructor(private readonly appService: AppService) {}

  @Get('/user')
  getUser() {
    return this.appService.getData();
  }
}
