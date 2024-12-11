import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async login(user: CreateUserDto) {
    const findUser = await this.usersRepository.findOneBy({ user: user.user });

    if (!findUser) throw new UnauthorizedException('not found user');
    if (findUser.password !== user.password)
      throw new UnauthorizedException('password faild');
    return 'success';
  }

  async create(user: CreateUserDto) {
    const userObj = await this.usersRepository.create(user);
    await this.usersRepository.save(userObj);
  }
}
