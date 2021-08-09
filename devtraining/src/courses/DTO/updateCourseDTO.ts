import { PartialType } from '@nestjs/mapped-types';
import { CreateCourse } from './createCourseDTO';

export class UpdateCourse extends PartialType(CreateCourse) {}
