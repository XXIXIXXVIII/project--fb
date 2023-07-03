import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostDTO } from 'src/dtos/post.dto';
import { Post } from 'src/typeorm/entity/Post.entity';
import { User } from 'src/typeorm/entity/User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  async createPost(postDto: PostDTO, user: any) {
    const newPost = await this.postRepository.create({
      typePost: postDto.typePost,
      content: postDto.content,
      checkIn: postDto.checkIn,
      background: postDto.background,
      createdAt: new Date(),
      user: user,
    });

    await this.postRepository.save(newPost);
    return newPost;
  }

  async getAllPost(user: any) {
    const posts = await this.postRepository.createQueryBuilder('post')
      .leftJoinAndSelect('post.user','user')
      .select(['post', 'user.id', 'user.firstName', 'user.lastName', 'user.avatar'])
      .orderBy('post.createdAt','DESC')
      .getMany();
    return posts;
  }
}
