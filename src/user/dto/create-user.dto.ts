import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsNumber()
  age: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
