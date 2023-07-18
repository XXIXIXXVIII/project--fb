import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { User } from './User.entity';
import { Post } from './Post.entity';
import { Comment } from './Comment.entity';

@Entity()
export class ReComment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", {name:"content",length:10000})
  content: string;
  
  @Column()
  createdAt:Date

  @ManyToOne(() => User, user=>user.reComments)
  user: User;

  @ManyToOne(()=>Comment, comment=>comment.reComments)
  comments: Comment
}