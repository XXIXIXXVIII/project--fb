import { Body, Controller, Get, Param, Post, Req, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PostService } from './post.service';
import { PostDTO } from 'src/dtos/post.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { mediaType } from 'src/typeorm/entity/MediaPost.entity';

@Controller('post')
export class PostController {
  constructor(private postService: PostService){}


  @UseGuards(AuthGuard('jwt'))
  @Get()
  async GetAllPost(@Req() request: Request){
    const user = request.user
    return await this.postService.getAllPost(user)
  }

  @Get('user/:id')
  async GetPostForUser(@Param("id") id:string){
    return await this.postService.GetPostForUser(id)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('statuslikepost')
  async getLikePost(@Req() request: Request, @Body('postId', ParseIntPipe ) postId:number){
    const user = request.user
    return await this.postService.getLikePost(user, postId)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('like')
  async LikePost(@Req() request: Request, @Body('postId', ParseIntPipe ) postId:number){
    const user = request.user
    return await this.postService.LikePost(user, postId)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('dear')
  async DearPost(@Req() request: Request, @Body('postId', ParseIntPipe ) postId:number){
    const user = request.user
    return await this.postService.DearPost(user, postId)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('sad')
  async SadPost(@Req() request: Request, @Body('postId', ParseIntPipe ) postId:number){
    const user = request.user
    return await this.postService.SadPost(user, postId)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('wow')
  async WowPost(@Req() request: Request, @Body('postId', ParseIntPipe ) postId:number){
    const user = request.user
    return await this.postService.WowPost(user, postId)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('haha')
  async HahaPost(@Req() request: Request, @Body('postId', ParseIntPipe ) postId:number){
    const user = request.user
    return await this.postService.HahaPost(user, postId)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('angry')
  async AngryPost(@Req() request: Request, @Body('postId', ParseIntPipe ) postId:number){
    const user = request.user
    return await this.postService.AngryPost(user, postId)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('love')
  async LovePost(@Req() request: Request, @Body('postId', ParseIntPipe ) postId:number){
    const user = request.user
    return await this.postService.LovePost(user, postId)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async CreatePost(@Body() postDto, @Req() request: Request){
    const user = request.user
    return await this.postService.createPost(postDto, user)
  }


  @UseGuards(AuthGuard('jwt'))
  @Post('mediaPost')
  async postImgPost(@Req() request: Request, @Body('postId', ParseIntPipe) postId:number,@Body('imgPost') imgPost:string, @Body('mediaType') mediaType:mediaType){
    const user = request.user
    return await this.postService.postImgPost(postId, imgPost, mediaType, user)
  }

  @Get('mediaPost/:postId')
  async getImgPost(@Param("postId", ParseIntPipe) postId:number){
    return await this.postService.getImgPost(postId)
  }

  @Get('postdetail/:postId')
  async getPostForIdPost(@Param("postId", ParseIntPipe) postId:number){
    return await this.postService.getPostForIdPost(postId)
  }
}
