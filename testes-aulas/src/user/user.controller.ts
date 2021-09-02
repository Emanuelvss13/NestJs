import { HttpFilter } from './../http.filter';
import { CreateUser } from './dto/create_user';
import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UseFilters,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interfaces/User';

@Controller('user')
@UseFilters(new HttpFilter())
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll() {
    // return await this.userService.findAll();

    throw new ForbiddenException();
  }

  @Post()
  async create(@Body() User: CreateUser) {
    await this.userService.create(User);
  }
}
