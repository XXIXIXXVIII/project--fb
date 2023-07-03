import {  IsNotEmpty, IsString } from "class-validator"
import { TypePost } from './../typeorm/entity/Post.entity';

export class PostDTO{
  @IsNotEmpty()
  userId: number

  typePost: TypePost

  @IsNotEmpty()
  @IsString()
  content: string

  checkIn: string

  background:string

  view:number

}

