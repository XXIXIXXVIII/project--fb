import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm'
import { User } from './User.entity';
import { Comment } from './Comment.entity';
import { MediaPost } from './MediaPost.entity';

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

  @Column("varchar", {name:"content",length:10000, nullable:true})
  content: string;  

  @Column({nullable:true})
  checkIn: string

  @Column("varchar", {name:"background",length:1000})
  background: string

  @Column({nullable:true, default:0})
  view:number

  @Column({nullable:true})
  createdAt:Date

  @ManyToOne(()=>User, user=>user.post, {onDelete: 'CASCADE'})
  user: User

  @ManyToMany(()=>User, user=>user.like)
  like: User[]
  
  @ManyToMany(()=>User, user=>user.love)
  love: User[]

  @ManyToMany(()=>User, user=>user.dear)
  dear: User[]

  @ManyToMany(()=>User, user=>user.haha)
  haha: User[]

  @ManyToMany(()=>User, user=>user.sad)
  sad: User[]

  @ManyToMany(()=>User, user=>user.wow)
  wow: User[]

  @ManyToMany(()=>User, user=>user.angry)
  angry: User[];

  @OneToMany(() => Comment, comment=>comment.posts)
  @JoinTable()
  comments: Comment[];

  @OneToMany(() => MediaPost, mediaPost=>mediaPost.posts)
  @JoinTable()
  mediaPost: MediaPost[];
}

  