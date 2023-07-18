import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from 'src/typeorm/entity/Comment.entity';
import { Post } from 'src/typeorm/entity/Post.entity';
import { ReComment } from 'src/typeorm/entity/ReComment.entity';
import { User } from 'src/typeorm/entity/User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment) private commentRepository: Repository<Comment>,
    @InjectRepository(Post) private postRepository: Repository<Post>,
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(ReComment) private reCommentRepository: Repository<ReComment>,
  ) {}

  async GetAllCommentForPost(postId: number) {
    const result =  await this.commentRepository.find({
      relations: ['posts', 'user','reComments','reComments.user'],
      where: { posts:{id:postId}  },
      order: { 'createdAt': 'DESC' }
    });
    return result
  }

  async PostComment(user:any, postId:number, content:string){
    console.log(user);
    const posts = await this.postRepository.findOne({where:{id: postId}})
    const users = await this.userRepository.findOne({where:{id: user.id}})
    const comment =this.commentRepository.create({content, posts, user:users, createdAt:new Date()})

    return this.commentRepository.save(comment)
  }

  async PostReComment(user:any, commentId:number, content:string){
    const comment = await this.commentRepository.findOne({where:{id: commentId}})
    const users = await this.userRepository.findOne({where:{id: user.id}})
    const reComment =this.reCommentRepository.create({content, comments:comment, user:users, createdAt:new Date()})
    console.log(reComment);

    return this.reCommentRepository.save(reComment)
  }
}
