import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

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

  @Column({nullable:true})
  coverImage: string

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
}
