import {
  Injectable,
  BadRequestException,
  NotFoundException,
  Res 
} from '@nestjs/common';
import { Response } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/typeorm/entity/User.entity';
import { LoginDTO, SignupDTO } from 'src/dtos/auth.dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async login(loginDto: LoginDTO){

    try {
      const user = await this.usersRepository.findOne({
        where: { gmail: loginDto.gmail },
      });
      
      if (!user) {
        throw new NotFoundException('Email or password not found');
      }
      const checkPassword = await argon.verify(user.password, loginDto.password);
      if (!checkPassword) {
        throw new NotFoundException('Email or password not found');
      }
      const token = await this.refeshJwtToken(user.id, user.gmail)
      delete user.password
      return {user, accessToken: await this.signJwtToken(user.id, user.gmail), refeshToken: token}
    } catch (error) {
      console.log(error);
    }

  }

  async signup(signupDto: SignupDTO) {
    try {
      const checkGmail = await this.usersRepository.findOne({
        where: { gmail: signupDto.gmail },
      });
    
      if (checkGmail) {
        throw new BadRequestException('email has been registered');
      }
      const hashedPassword = await argon.hash(signupDto.password);
      
      const user = await this.usersRepository.create({
        gmail: signupDto.gmail,
        firstName: signupDto.firstName,
        lastName: signupDto.lastName,
        password: hashedPassword,
        sex: signupDto.sex,
        birthday: signupDto.birthday,
      });
      await this.usersRepository.save(user);
      const token = await this.refeshJwtToken(user.id, user.gmail)


      delete user.password
      return {user, accessToken: await this.signJwtToken(user.id, user.gmail), refeshToken: token}
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  async signJwtToken (id:number, gmail:string):Promise<string>{
    const payload ={
      sub: id,
      gmail
    }   
    const jwtString = await this.jwtService.signAsync(payload,{
      expiresIn: '10m',
      secret: this.configService.get('JWT_SECRET')
    })
    return jwtString
  }
 async refeshJwtToken (id:number, gmail:string):Promise<string>{
    const payload ={
      sub: id,
      gmail
    }   
    const jwtString = await this.jwtService.signAsync(payload,{
      expiresIn: '365d',
      secret: this.configService.get('JWT_SECRET')
    })
    return jwtString
  }
}
