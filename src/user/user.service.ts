import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

@Injectable()
export class UserService {
  public users: User[] = [
    { id: 1, name: 'Ali', email: 'ali@gmail.com', age: 25 },
    { id: 2, name: 'Ahmed', email: 'ahmed@gmail.com', age: 26 },
    { id: 3, name: 'Osama', email: 'osama@gmail.com', age: 27 },
    { id: 4, name: 'John', email: 'john@gmail.com', age: 28 },
    { id: 5, name: 'Ali', email: 'ali@gmail.com', age: 25 },
    { id: 6, name: 'Ahmed', email: 'ahmed@gmail.com', age: 26 },
    { id: 7, name: 'Osama', email: 'osama@gmail.com', age: 27 },
    { id: 8, name: 'John', email: 'john@gmail.com', age: 28 },
  ];
  requestCount = 0;

  findAllUser(id: number) {
    this.requestCount++;
    console.log(`REQUEST CAME ${this.requestCount}`);
    console.log('ID: ', id);
    console.log('MY USERS', this.users);
    console.log(
      'RETURNED USERS',
      this.users.filter((u) => u.id === id),
    );
    return this.users.filter((u) => u.id === id);
  }
}
