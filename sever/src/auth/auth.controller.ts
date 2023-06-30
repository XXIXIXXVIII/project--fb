import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { User } from "src/typeorm/entity/User.entity";
import { LoginDTO, SignupDTO } from "src/dtos/auth.dto";

@Controller('auth')
export class AuthController{
  constructor(private authService: AuthService){
  }
  @Post('login')
  async login(@Body() body: LoginDTO){
    return await this.authService.login(body)
  }

  @Post('signup')
  async signup(@Body() body: SignupDTO){
    console.log(body);
    return await this.authService.signup(body)
  }
}