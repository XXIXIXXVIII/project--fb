import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany, PrimaryColumn } from 'typeorm'
import { Post } from './Post.entity';
import { Page } from './Page.entity';
import { Comment } from './Comment.entity';
import { MediaPost } from './MediaPost.entity';
import { ReComment } from './ReComment.entity';
import { v4 as uuidv4 } from 'uuid';

@Entity({name:'user'})
export class User {
  @PrimaryColumn()
  id: string = uuidv4()

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column({ unique: true})
  gmail: string

  @Column()
  password: string

  @Column("varchar", {name:"avatar",length:1000,default: "https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg" })
  avatar: string;  

  @Column("varchar", {name:"coverImage",length:1000,default: "https://img4.thuthuatphanmem.vn/uploads/2020/05/12/hinh-anh-xam-don-gian_103624444.jpg"})
  coverImage: string

  @Column("varchar", {name:"bio",length:1000,nullable:true})
  bio: string

  @Column({nullable:true})
  birthday:Date

  @Column({nullable:true})
  sex:string

  @Column({nullable:true})
  Wordplace:string
  
  @Column({nullable:true})
  hightSchool:string
  
  @Column({nullable:true})
  university:string

  @Column({nullable:true})
  language:string

  @Column({nullable:true})
  liveAt:string

  @Column({nullable:true})
  from:string

  @Column({default:false})
  isLogin:boolean

  @OneToMany(()=>Post, post=>post.user, {onDelete:'CASCADE'})
  post: Post[]

  @OneToMany(()=>Post, post=>post.user, {onDelete:'CASCADE'})
  page: Page[]

  @ManyToMany(() => User, user => user.friends)
  @JoinTable()
  friends: User[]

  @ManyToMany(() => User, user => user.request)
  @JoinTable()
  request: User[]

  @ManyToMany(()=>Post, post=>post.like)
  @JoinTable()
  like: Post[]

  @ManyToMany(()=>Post, post=>post.love)
  @JoinTable()
  love: Post[]

  @ManyToMany(()=>Post, post=>post.haha)
  @JoinTable()
  haha: Post[]

  @ManyToMany(()=>Post, post=>post.sad)
  @JoinTable()
  sad: Post[]

  @ManyToMany(()=>Post, post=>post.wow)
  @JoinTable()
  wow: Post[]

  @ManyToMany(()=>Post, post=>post.dear)
  @JoinTable()
  dear: Post[]

  @ManyToMany(()=>Post, post=>post.angry)
  @JoinTable()
  angry: Post[]

  @OneToMany(() => Comment, comment=>comment.user)
  @JoinTable()
  comments: Comment[]

  @OneToMany(() => ReComment, reComment=>reComment.user)
  @JoinTable()
  reComments: ReComment[]

  @OneToMany(() => MediaPost, mediaPost=>mediaPost.user)
  @JoinTable()
  mediaPost: MediaPost[]

}
