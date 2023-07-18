import { Request } from 'express';
import { CommentService } from './comment.service';
import { Body, Controller, Get, Param, Post, Req, UseGuards, ParseIntPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService){}

  @Get('/:postId')
  async GetAllCommentForPost(@Param('postId', ParseIntPipe) postId:number){
    return await this.commentService.GetAllCommentForPost(postId)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('recomment')
  async PostReComment(@Req() request: Request, @Body('commentId', ParseIntPipe ) commentId:number, @Body('content') content:string){
    console.log("2222222222222222")
    const user = request.user
    return await this.commentService.PostReComment(user, commentId, content)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async PostComment(@Req() request: Request, @Body('postId', ParseIntPipe ) postId:number, @Body('content') content:string){
    const user = request.user
    return await this.commentService.PostComment(user, postId, content)
  }


}
