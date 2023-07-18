import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entity/User.entity';
import { MediaPost } from 'src/typeorm/entity/MediaPost.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User, MediaPost])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
