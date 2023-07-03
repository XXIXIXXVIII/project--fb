import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { User } from './User.entity';

export enum TypePost {
  PUBLIC = 'public',
  FRIEND = 'friend',
  ONLYME = 'only me'
}

@Entity({name:'post'})
export class Post {
  @PrimaryGeneratedColumn()
  id: number

  @Column({type:'enum', enum: TypePost, default:TypePost.PUBLIC})
  typePost: TypePost;

  @Column("varchar", {name:"content",length:10000})
  content: string;  

  @Column({nullable:true})
  checkIn: string

  @Column("varchar", {name:"background",length:1000})
  background: string

  @Column({nullable:true, default:0})
  view:number

  @Column()
  createdAt:Date

  @ManyToOne(()=>User, user=>user.post, {onDelete: 'CASCADE'})
  user: User

}
  