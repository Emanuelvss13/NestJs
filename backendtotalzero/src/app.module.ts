import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://emanuel:desconhecido94@cluster0.b0aoq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
