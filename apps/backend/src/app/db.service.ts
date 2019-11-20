import { Injectable } from '@angular/core';
const mysql = require('serverless-mysql');
@Injectable({
  providedIn: 'root'
})
export class DbService {
  db = mysql({
    config: {
      host: 'localhost',
      database: 'test',
      user:'root',
      password: 'the@123'
    }
  })
  constructor() { }
  async getQuery(query) {
    console.log('tes',query);
    try {
      const results = await this.db.query(query);
     // const res = await fetch(results);
      await this.db.end();
      return results;
    } catch (error) {
      return { error }
    }
  }

}
