import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  user: string;

  @IsString()
  password: string;
}
