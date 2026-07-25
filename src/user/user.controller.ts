import { Controller, Get, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getUser() {
    return 'Hellow from user';
  }

  @Get('all')
  getAllUser() {
    return ['Ali', 'Ahmed', 'Osama', 'John'];
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return `Hellow from user ${id}`;
  }
}
