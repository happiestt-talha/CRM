import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { LoggerService } from './user.logger';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly logger: LoggerService,
  ) {}

  getUser() {
    return 'Hellow from default user';
  }

  @Get('all')
  getAllUser() {
    return ['Ali', 'Ahmed', 'Osama', 'John'];
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.findAllUser(id);
    if (user.length === 0) {
      this.logger.log(`User with id ${id} not found`, 'error');
      return 'User not found';
    }
    this.logger.log(
      `User with id ${id} and name ${user[0].name} is found`,
      'SUCCESS',
    );
    return `Hello ${user[0].name} Your Age Is ${user[0].age}`;
  }
}
