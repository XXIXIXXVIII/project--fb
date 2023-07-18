import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entity/User.entity';
import { ConfigModule } from '@nestjs/config';
import { Post } from './typeorm/entity/Post.entity';
import { PostModule } from './post/post.module';
import { Page } from './typeorm/entity/Page.entity';
import { Comment } from './typeorm/entity/Comment.entity';
import { CommentModule } from './comment/comment.module';
import { MediaPost } from './typeorm/entity/MediaPost.entity';
import { ReComment } from './typeorm/entity/ReComment.entity';
import { PageModule } from './page/page.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '12345678',
    database:'fbproject',
    entities: [User, Post, Page, Comment, MediaPost, ReComment],
    synchronize: true,
    
  }),
  AuthModule,
  UserModule,
  PostModule,
  CommentModule,
  PageModule,
],
})
export class AppModule {}
