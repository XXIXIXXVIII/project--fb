import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";



interface Invitation {
  status: string;
}

@Entity({name:'relation'})
export class Relation{
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  typeRelation:string


  @ManyToOne(()=>User, user=>user.relation)
  @JoinColumn({name: 'user_id'})
  user: User

  @ManyToOne(()=>User, user=>user.relation)
  @JoinColumn({name: 'relation_id'})
  relation: User
}