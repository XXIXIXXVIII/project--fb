import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entity/User.entity';
import { Post } from 'src/typeorm/entity/Post.entity';
import { Comment } from 'src/typeorm/entity/Comment.entity';
import { ReComment } from 'src/typeorm/entity/ReComment.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Post, User, Comment, ReComment])],
  controllers: [CommentController],
  providers: [CommentService]
})
export class CommentModule {}
