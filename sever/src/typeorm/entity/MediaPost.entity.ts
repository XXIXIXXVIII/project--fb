import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { User } from './User.entity';
import { Post } from './Post.entity';

export enum mediaType {
  IMAGE = 'image',
  VIDEO = 'video'
}

@Entity()
export class MediaPost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mediaType: string;

  @Column("varchar", {name:"url",length:1000})
  url:string

  @ManyToOne(() => User, user => user.mediaPost)
  user: User;

  @ManyToOne(() => Post, post => post.mediaPost)
  posts: Post;
}