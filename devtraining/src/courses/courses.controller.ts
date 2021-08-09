import { UpdateCourse } from './DTO/updateCourseDTO';
import { CreateCourse } from './DTO/createCourseDTO';
import { CoursesService } from './courses.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const course = this.coursesService.findOne(id);

    if (course) {
      return course;
    } else {
      throw new HttpException(
        `Course ID ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Post()
  Create(@Body() createCourseDto: CreateCourse) {
    const course = this.coursesService.create(createCourseDto);

    return course;
  }

  @Patch(':id')
  update(@Param('id') id, @Body() updateCourseDto: UpdateCourse) {
    const course = this.coursesService.update(id, updateCourseDto);

    return course;
  }

  @Delete(':id')
  remove(@Param('id') id) {
    const course = this.coursesService.remove(id);

    return course;
  }
}
