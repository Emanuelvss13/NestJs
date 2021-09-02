import { HomeController } from './home.controller';
import { Module } from '@nestjs/common';
import { UsersModule } from './user/user.module';

@Module({
  imports: [UsersModule],
  controllers: [HomeController],
})
export class AppModule {}
