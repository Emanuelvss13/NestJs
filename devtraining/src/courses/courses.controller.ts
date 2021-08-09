import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get('list')
  findAll() {
    return 'lista de cursos';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Curso #${id}`;
  }

  @Post()
  Create(@Body('name') body) {
    return body;
  }
}
