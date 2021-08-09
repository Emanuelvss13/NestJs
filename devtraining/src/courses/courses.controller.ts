import { CoursesService } from './courses.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get('list')
  findAll(@Res() response) {
    return response.status(200).send('Lista de cursos');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Curso #${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  Create(@Body('name') body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id, @Body() body) {
    return `O curso ${id} foi atualizado!`;
  }

  @Delete(':id')
  remove(@Param('id') id, @Body() body) {
    return `O curso ${id} foi deletado!`;
  }
}
