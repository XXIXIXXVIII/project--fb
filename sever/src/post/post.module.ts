import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/typeorm/entity/Post.entity';
import { User } from 'src/typeorm/entity/User.entity';
import { MediaPost } from 'src/typeorm/entity/MediaPost.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Post, User, MediaPost])],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
