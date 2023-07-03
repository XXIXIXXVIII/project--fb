import { Controller, Get, Param, ParseIntPipe, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService:UserService){}

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  me(@Req() request: Request){
    console.log(request.user);
    return "hello"
  }

  @Get(':id')
  async userDetail(@Param('id', ParseIntPipe) id:number){
    return await this.userService.UserDetai(id)
  }
}
