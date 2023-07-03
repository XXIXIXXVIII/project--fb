import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entity/User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>,){
  }
  async UserDetai(id:number){
    const userDetail = await this.usersRepository.findOne({where:{id}})
    if(!userDetail){
      throw new NotFoundException()
    }
    delete userDetail.password
    return userDetail
  }
}
