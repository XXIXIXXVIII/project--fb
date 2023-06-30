import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'
import { Request } from 'express';

@Controller('user')
export class UserController {

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  me(@Req() request: Request){
    console.log(request.user);
    return "hello"
  }
}