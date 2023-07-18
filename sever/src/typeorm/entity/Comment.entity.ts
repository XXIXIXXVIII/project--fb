import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { User } from './User.entity';
import { Post } from './Post.entity';
import { ReComment } from './ReComment.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", {name:"content",length:10000})
  content: string;

  @Column()
  createdAt:Date

  @ManyToOne(() => User, user => user.comments)
  user: User;

  @ManyToOne(() => Post, post => post.comments)
  posts: Post;

  @OneToMany(()=> ReComment, recomment=>recomment.comments)
  reComments: ReComment[] 
}