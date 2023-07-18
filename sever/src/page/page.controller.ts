import { Controller, Post, UseGuards, Req, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PageService } from './page.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('page')
export class PageController {
  constructor(private pageService: PageService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('createPage')
  async createPage(
    @Req() request: Request,
    @Body('namePage') namePage: string,
    @Body('categoryPage') categoryPage: string,
    @Body('story') story: string,
    @Body('webName') webName: string,
    @Body('phone') phone: string,
    @Body('email') email: string,
    @Body('address') address: string,
    @Body('avartaUrl') avartaUrl: string,
    @Body('coverImgUrl') coverImgUrl: string,
    @Body('cityTown') cityTown: string,
    @Body('zipCode') zipCode: string,
  ) {
    const user = request.user;
    return await this.pageService.createPage(user, namePage, categoryPage, story, webName, phone, email, address, avartaUrl, coverImgUrl, cityTown, zipCode);
  }

  @Get('/:pageId')
  async getPageDetail(@Param("pageId") pageId:string){
    return await this.pageService.getPageDetail(pageId)
  }
}

