import { Module } from '@nestjs/common';
import { PageController } from './page.controller';
import { PageService } from './page.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Page } from 'src/typeorm/entity/Page.entity';
import { MediaPost } from 'src/typeorm/entity/MediaPost.entity';
import { User } from 'src/typeorm/entity/User.entity';
import { Post } from 'src/typeorm/entity/Post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, User, MediaPost, Page])], 
  controllers: [PageController],
  providers: [PageService]
})
export class PageModule {}
