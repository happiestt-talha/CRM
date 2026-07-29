import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  @Get()
  getUser() {
    return 'Hellow from default user';
  }

  @Get('all')
  getAllUser() {
    return ['Ali', 'Ahmed', 'Osama', 'John'];
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const userService = new UserService();

    const user = userService.findAllUser(id);
    if (user.length === 0) {
      return 'User not found';
    }
    return `Hello ${user[0].name} Your Age Is ${user[0].age}`;
  }
}
