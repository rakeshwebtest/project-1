import { Injectable } from '@nestjs/common';
import { DbService } from './db.service';
const escape = require('sql-template-strings');
@Injectable()
export class AppService extends DbService {
  async getData() {
  const data = await this.getQuery(escape`SELECT * FROM blog`);
    return ({ message: 'Welcome to backend!', res: data });
  }
}
