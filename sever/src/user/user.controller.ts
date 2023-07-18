import { Body, Controller, Get, Param, ParseIntPipe, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  me(@Req() request: Request) {
    console.log(request.user);
    return "hello"
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('friends/request')
  async getListFriendsRequest(@Req() request: Request) {
    const user = request.user
    return await this.userService.getListFriendsRequest(user)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('changestory')
  async changeStory(@Req() request: Request, @Body('story') story:string) {
    const user = request.user
    return await this.userService.changeStory(user, story)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('friends/:id')
  async getListFriends(@Param('id') id: string) {
    return await this.userService.getListFriends(id)
  }



  @UseGuards(AuthGuard('jwt'))
  @Post('reqfriend')
  async postReqFriend(@Req() request: Request, @Body('friendId') friendId: string) {
    const user = request.user
    return await this.userService.postReqFriend(user, friendId);
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('alluser')
  async getAllUser(@Req() request: Request) {
    const user = request.user
    return await this.userService.getAllUser(user)
  }


  @UseGuards(AuthGuard('jwt'))
  @Post('acceptreqfriend')
  async acceptReqFriend(@Req() request: Request, @Body('friendId') friendId: string) {
    const user = request.user
    return await this.userService.acceptReqFriend(user, friendId)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('sentFriendRequest')
  async sentFriendRequest(@Req() request: Request, @Body('friendId') friendId: string) {
    const user = request.user
    return await this.userService.sentFriendRequest(user, friendId)
  }


  

  @Get('allImgForUser/:userId')
  async getImgForUser(@Param('userId') userId: string) {
    return await this.userService.getImgForUser(userId)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('coverImg')
  async postCoverImg(@Req() request: Request, @Body('coverImg') coverImg: string) {
    const user = request.user
    return await this.userService.postCoverImg(user, coverImg)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('avarta')
  async postAvarta(@Req() request: Request, @Body('avarta') avarta: string) {
    const user = request.user
    return await this.userService.postAvarta(user, avarta)
  }

  @Get(':id')
  async userDetail(@Param('id') id: string) {
    return await this.userService.UserDetai(id)
  }
 
}
