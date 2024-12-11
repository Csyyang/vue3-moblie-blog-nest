import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  login(user: CreateUserDto) {
    console.log(user);
    return `This action login a user`;
  }
}
