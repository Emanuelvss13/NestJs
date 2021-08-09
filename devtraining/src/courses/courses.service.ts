import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundmento NestJS',
      description: 'Fundmento NestJS',
      tags: ['nodejs', 'nestjs', 'javascript'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    return this.courses.find((c) => c.id === Number(id));
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  update(id: string, updateCourseDto: any) {
    const upCourse = this.courses.findIndex((c) => c.id === Number(id));

    this.courses[upCourse] = updateCourseDto;
  }

  remove(id: string) {
    const existCourse = this.courses.findIndex((c) => c.id === Number(id));

    if (existCourse) {
      this.courses.splice(existCourse, 1);
    }
  }
}
