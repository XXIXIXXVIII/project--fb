import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { PostService } from './post.service';
import { PostDTO } from 'src/dtos/post.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('post')
export class PostController {
  constructor(private postService: PostService){}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async CreatePost(@Body() postDto, @Req() request: Request){
    const user = request.user
    return await this.postService.createPost(postDto, user)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async GetAllPost(@Req() request: Request){
    const user = request.user
    return await this.postService.getAllPost(user)
  }
}
