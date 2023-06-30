import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
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
    const user = await this.usersRepository.findOne({
      where: { gmail: loginDto.gmail },
    });
    console.log("object");
    if (!user) {
      return new NotFoundException('Email or password not found');
    }
    
    const checkPassword = await argon.verify(user.password, loginDto.password);
    if (!checkPassword) {
      return new NotFoundException('Email or password not found');
    }
    delete user.password
    return {user, accessToken: await this.signJwtToken(user.id, user.gmail)}
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
      delete user.password
      return {user, accessToken: this.signJwtToken(user.id, user.gmail)}
    } catch (error) {
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
}
