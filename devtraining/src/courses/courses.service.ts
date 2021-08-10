import { UpdateCourse } from './DTO/updateCourseDTO';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  findAll() {
    return this.courseRepository.find();
  }

  findOne(id: string) {
    const course = this.courseRepository.findOne(id);

    if (course) {
      return course;
    } else {
      throw new NotFoundException(`Course ID not found ${id}`);
    }
  }

  create(createCourseDto: any) {
    const course = this.courseRepository.create(createCourseDto);
    return this.courseRepository.save(course);
  }

  async update(id: string, updateCourseDto: UpdateCourse) {
    const upCourse = await this.courseRepository.preload({
      id: +id,
      ...updateCourseDto,
    });

    if (upCourse) {
      return this.courseRepository.save(upCourse);
    } else {
      throw new NotFoundException(`Course ID not found ${id}`);
    }
  }

  async remove(id: string) {
    const course = await this.courseRepository.findOne(id);

    if (course) {
      return await this.courseRepository.remove(course);
    } else {
      throw new NotFoundException(`Course ID not found ${id}`);
    }
  }
}
