import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Page } from 'src/typeorm/entity/Page.entity';
import { User } from 'src/typeorm/entity/User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PageService {
  constructor(
    @InjectRepository(Page) private pageRepository: Repository<Page>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createPage(
    user: any,
    namePage: string,
    categoryPage: string,
    story: string,
    webName: string,
    phone: string,
    email: string,
    address: string,
    avartaUrl: string,
    coverImgUrl: string,
    cityTown: string,
    zipCode: string,
  ) {
    try {
      const userFind = await this.userRepository.findOne({
        where: { id: user.id },
      });
      const page = this.pageRepository.create({
        pageName:namePage,
        category: categoryPage,
        user: userFind,
        story,
        webName,
        phone,
        email,
        andress: address,
        avatar: avartaUrl,
        coverImage: coverImgUrl,
        cityTown,
        zipCode,
      });
      return await this.pageRepository.save(page);
    } catch (error) {
      console.log(error)
    }
  }

  async getPageDetail(pageId:string){
    const page = await this.pageRepository.findOne({where:{id:pageId}})
    return page
  }
}
