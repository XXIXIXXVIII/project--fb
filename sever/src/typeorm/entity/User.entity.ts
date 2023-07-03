import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm'
import { Post } from './Post.entity';

@Entity({name:'user'})
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true})
  gmail: string;

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

  @OneToMany(()=>Post, post=>post.user)
  post: Post[]

  @ManyToMany(()=>User, user=>user.relation)
  @JoinTable({
    name: 'relation',
    joinColumn: {name: 'user_id', referencedColumnName:'id'},
    inverseJoinColumn: { name: 'relation_id', referencedColumnName: 'id'},
  })
  relation: User[]
}
