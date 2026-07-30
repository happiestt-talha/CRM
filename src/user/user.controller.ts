import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  NotFoundException,
  Post,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { LoggerService } from './user.logger';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly logger: LoggerService,
  ) {}

  @Get('')
  getUser() {
    return 'Hellow from default user';
  }

  @Post('add')
  addUser(@Body() createUserDto: CreateUserDto) {
    // this.logger.log(`User added successfully`, 'success');
    this.logger.log(`Body is ${JSON.stringify(createUserDto)}`, 'error');
    return {
      status: 200,
      message: 'User added successfully',
      data: createUserDto,
    };
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
      throw new NotFoundException('User not found');
    }
    this.logger.log(
      `User with id ${id} and name ${user[0].name} is found`,
      'SUCCESS',
    );
    return `Hello ${user[0].name} Your Age Is ${user[0].age}`;
  }
}
