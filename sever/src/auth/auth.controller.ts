import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDTO, SignupDTO } from "src/dtos/auth.dto";
import { Response } from 'express'

@Controller('auth')
export class AuthController{
  constructor(private authService: AuthService){
  }
  @Post('login')
  async login(@Body() body: LoginDTO, @Res() response:Response){

    const result = await this.authService.login(body)
    if(result){
      response.cookie('jwt', result.refeshToken, { 
        httpOnly: true, 
        secure: false,
        path:"/",
        sameSite:"strict"
      });
      return  response.status(200).json(result) 
    }else{
      response.status(400).json('Email or password not found')
    }
  
  }

  @Post('signup')
  async signup(@Body() body: SignupDTO){

    return await this.authService.signup(body)
  }
}