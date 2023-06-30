import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common"
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/typeorm/entity/User.entity";
import { Repository } from "typeorm";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(configService: ConfigService, 
    @InjectRepository(User) private usersRepository: Repository<User>
    ){
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('JWT_SECRET'),
    })
  }
  async validate(payload:{sub:number, gmail:string}){
    const user = await this.usersRepository.findOne({where:{id: payload.sub}})
    delete user.password
    return user
  }
}