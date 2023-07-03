import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entity/User.entity';
import { ConfigModule } from '@nestjs/config';
import { Post } from './typeorm/entity/Post.entity';
import { PostModule } from './post/post.module';
import { Relation } from './typeorm/entity/Relation.entity';

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
    entities: [User, Post],
    synchronize: true
  }),
  AuthModule,
  UserModule,
  PostModule
],
})
export class AppModule {}
