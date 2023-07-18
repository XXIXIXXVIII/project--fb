import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, PrimaryColumn } from 'typeorm'
import { User } from './User.entity';
import { v4 as uuidv4 } from 'uuid';


@Entity({name:'page'})
export class Page {
  @PrimaryColumn()
  id: string = uuidv4()

  @Column()
  pageName: string

  @Column("varchar", {name:"avatar",length:1000, nullable:true})
  avatar: string

  @Column("varchar", {name:"coverImage",length:1000, nullable:true})
  coverImage: string

  @Column({nullable:true})
  category:string

  @Column({nullable:true})
  andress:string

  @Column({nullable:true})
  phone:string

  @Column({nullable:true})
  story:string

  @Column({nullable:true})
  webName:string

  @Column({nullable:true})
  email:string

  @Column({nullable:true})
  cityTown:string

  @Column({nullable:true})
  zipCode:string

  @ManyToOne(()=>User, user=>user.page, {onDelete: 'CASCADE'})
  user: User

}
