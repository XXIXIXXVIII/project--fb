import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostDTO } from 'src/dtos/post.dto';
import { MediaPost, mediaType } from 'src/typeorm/entity/MediaPost.entity';
import { Post } from 'src/typeorm/entity/Post.entity';
import { User } from 'src/typeorm/entity/User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(MediaPost) private mediaPostRepository: Repository<MediaPost>,
  ) {}

  async createPost(postDto: PostDTO, user: any) {
    const newPost = await this.postRepository.create({
      typePost: postDto.typePost,
      content: postDto.content,
      checkIn: postDto.checkIn,
      background: postDto.background,
      createdAt: new Date(),
      user: user,
    });

    await this.postRepository.save(newPost);
    return newPost;
  }

  async getAllPost(user: any) {
    const userfr = await this.userRepository
      .createQueryBuilder()
      .select(['DISTINCT userId_1', 'userId_2'])
      .from('user_friends_user', 'ufu')
      .where('ufu.userId_1 = :id', { id: user.id })
      .orWhere('ufu.userId_2 = :id', { id: user.id })
      .getRawMany();

    const listFriends = userfr.map((friend) => {
      if (friend.userId_1 === user.id) {
        return friend.userId_2;
      } else {
        return friend.userId_1;
      }
    });

    const friendPostsPromises = listFriends.map((friendId) =>
      this.postRepository
        .createQueryBuilder('post')
        .leftJoinAndSelect('post.user', 'user')
        .where('user.id = :userId', { userId: friendId })
        .getMany(),
    );

    const friendPosts = await Promise.all(friendPostsPromises);

    return friendPosts;
  }

  async GetPostForUser(id: string) {
    console.log("object", id);
    const posts = await this.postRepository
      .createQueryBuilder('post')
      .orderBy('post.createdAt', 'DESC')
      .leftJoinAndSelect('post.user', 'user')
      .where('user.id=:userId', { userId: id })
      .getMany();
    return posts;
  }

  async LikePost(user: any, postId: number) {
    const currentUser = await this.userRepository.findOne({
      where: { id: user.id }, relations: ['like','love','dear','sad','wow','haha','angry']
    });
    const post = await this.postRepository.findOne({ where: { id: postId } });

    currentUser.like = [...currentUser.like,post];
    currentUser.love = currentUser.love?.filter(lovePost => lovePost.id !== postId);
    currentUser.dear = currentUser.dear?.filter(dearPost => dearPost.id !== postId);;
    currentUser.sad = currentUser.sad?.filter(sadPost => sadPost.id !== postId);;
    currentUser.wow = currentUser.wow?.filter(wowPost => wowPost.id !== postId);;
    currentUser.haha = currentUser.haha?.filter(hahaPost => hahaPost.id !== postId);;
    currentUser.angry = currentUser.angry?.filter(angryPost => angryPost.id !== postId);;
    return this.userRepository.save(currentUser);
  }

  async LovePost(user: any, postId: number) {
    const currentUser = await this.userRepository.findOne({
      where: { id: user.id }, relations: ['like','love','dear','sad','wow','haha','angry']
    });
    const post = await this.postRepository.findOne({ where: { id: postId } });
    currentUser.love = [...currentUser.love,post];
    currentUser.like = currentUser.like?.filter(likePost => likePost.id !== postId);
    currentUser.dear = currentUser.dear?.filter(dearPost => dearPost.id !== postId);;
    currentUser.sad = currentUser.sad?.filter(sadPost => sadPost.id !== postId);;
    currentUser.wow = currentUser.wow?.filter(wowPost => wowPost.id !== postId);;
    currentUser.haha = currentUser.haha?.filter(hahaPost => hahaPost.id !== postId);;
    currentUser.angry = currentUser.angry?.filter(angryPost => angryPost.id !== postId);

    return this.userRepository.save(currentUser);

  }

  async DearPost(user: any, postId: number) {
    const currentUser = await this.userRepository.findOne({
      where: { id: user.id }, relations: ['like','love','dear','sad','wow','haha','angry']
    });
    const post = await this.postRepository.findOne({ where: { id: postId } });
    currentUser.dear = [...currentUser.dear,post];
    currentUser.like = currentUser.like?.filter(likePost => likePost.id !== postId);
    currentUser.love = currentUser.love?.filter(lovePost => lovePost.id !== postId);;
    currentUser.sad = currentUser.sad?.filter(sadPost => sadPost.id !== postId);;
    currentUser.wow = currentUser.wow?.filter(wowPost => wowPost.id !== postId);;
    currentUser.haha = currentUser.haha?.filter(hahaPost => hahaPost.id !== postId);;
    currentUser.angry = currentUser.angry?.filter(angryPost => angryPost.id !== postId);
    return this.userRepository.save(currentUser);
  }

  async SadPost(user: any, postId: number) {
    const currentUser = await this.userRepository.findOne({
      where: { id: user.id }, relations: ['like','love','dear','sad','wow','haha','angry']
    });
    const post = await this.postRepository.findOne({ where: { id: postId } });
    currentUser.sad = [...currentUser.sad,post];
    currentUser.like = currentUser.like?.filter(likePost => likePost.id !== postId);
    currentUser.love = currentUser.love?.filter(lovePost => lovePost.id !== postId);;
    currentUser.dear = currentUser.dear?.filter(dearPost => dearPost.id !== postId);;
    currentUser.wow = currentUser.wow?.filter(wowPost => wowPost.id !== postId);;
    currentUser.haha = currentUser.haha?.filter(hahaPost => hahaPost.id !== postId);;
    currentUser.angry = currentUser.angry?.filter(angryPost => angryPost.id !== postId);

    return this.userRepository.save(currentUser);
  }

  async WowPost(user: any, postId: number) {
    const currentUser = await this.userRepository.findOne({
      where: { id: user.id }, relations: ['like','love','dear','sad','wow','haha','angry']
    });
    const post = await this.postRepository.findOne({ where: { id: postId } });
    currentUser.wow = [...currentUser.wow,post];
    currentUser.like = currentUser.like?.filter(likePost => likePost.id !== postId);
    currentUser.love = currentUser.love?.filter(lovePost => lovePost.id !== postId);;
    currentUser.dear = currentUser.dear?.filter(dearPost => dearPost.id !== postId);;
    currentUser.sad = currentUser.sad?.filter(sadPost => sadPost.id !== postId);;
    currentUser.haha = currentUser.haha?.filter(hahaPost => hahaPost.id !== postId);;
    currentUser.angry = currentUser.angry?.filter(angryPost => angryPost.id !== postId);
    return this.userRepository.save(currentUser);
  }

  async HahaPost(user: any, postId: number) {
    const currentUser = await this.userRepository.findOne({
      where: { id: user.id }, relations: ['like','love','dear','sad','wow','haha','angry']
    });
    const post = await this.postRepository.findOne({ where: { id: postId } });
    currentUser.haha = [...currentUser.haha,post];
    currentUser.like = currentUser.like?.filter(likePost => likePost.id !== postId);
    currentUser.love = currentUser.love?.filter(lovePost => lovePost.id !== postId);;
    currentUser.dear = currentUser.dear?.filter(dearPost => dearPost.id !== postId);;
    currentUser.sad = currentUser.sad?.filter(sadPost => sadPost.id !== postId);;
    currentUser.wow = currentUser.wow?.filter(wowPost => wowPost.id !== postId);;
    currentUser.angry = currentUser.angry?.filter(angryPost => angryPost.id !== postId);
    return this.userRepository.save(currentUser);
  }

  async AngryPost(user: any, postId: number) {
    const currentUser = await this.userRepository.findOne({
      where: { id: user.id }, relations: ['like','love','dear','sad','wow','haha','angry']
    });
    const post = await this.postRepository.findOne({ where: { id: postId } });
    currentUser.angry = [...currentUser.angry,post];
    currentUser.like = currentUser.like?.filter(likePost => likePost.id !== postId);
    currentUser.love = currentUser.love?.filter(lovePost => lovePost.id !== postId);;
    currentUser.dear = currentUser.dear?.filter(dearPost => dearPost.id !== postId);;
    currentUser.sad = currentUser.sad?.filter(sadPost => sadPost.id !== postId);;
    currentUser.wow = currentUser.wow?.filter(wowPost => wowPost.id !== postId);;
    currentUser.haha = currentUser.haha?.filter(hahaPost => hahaPost.id !== postId);
    return this.userRepository.save(currentUser);
  }

  async getLikePost(user: any, postId: number) {
    const currentUser = await this.userRepository.findOne({
      where: { id: user.id },
    });
    const like = await this.postRepository.findOne({
      where: { id: postId },
      relations: ['like'],
    });
    const love = await this.postRepository.findOne({
      where: { id: postId },
      relations: ['love'],
    });
    const dear = await this.postRepository.findOne({
      where: { id: postId },
      relations: ['dear'],
    });
    const sad = await this.postRepository.findOne({
      where: { id: postId },
      relations: ['sad'],
    });
    const wow = await this.postRepository.findOne({
      where: { id: postId },
      relations: ['wow'],
    });
    const haha = await this.postRepository.findOne({
      where: { id: postId },
      relations: ['haha'],
    });
    const angry = await this.postRepository.findOne({
      where: { id: postId },
      relations: ['angry'],
    });

    const likeCount = like.like.length

    const loveCount = love.love.length

    const dearCount = dear.dear.length

    const sadCount = sad.sad.length

    const wowCount = wow.wow.length

    const hahaCount = haha.haha.length

    const angryCount = angry.angry.length

    const currentUserLike = like.like.some(like => like.id === user.id);
    const currentUserLove = love.love.some(love => love.id === user.id);
    const currentUserDear = dear.dear.some(dear => dear.id === user.id);
    const currentUserSad = sad.sad.some(sad => sad.id === user.id);
    const currentUserWow = wow.wow.some(wow => wow.id === user.id);
    const currentUserHaHa = haha.haha.some(haha => haha.id === user.id);
    const currentUserAngry = angry.angry.some(angry => angry.id === user.id);
    const countAll = likeCount + loveCount + dearCount+  sadCount + wowCount + hahaCount + angryCount


    return {
      countAll,
      like: { users: like.like, count: likeCount, currentUserLike },
      love: { users: love.love, count: loveCount, currentUserLove },
      dear: { users: dear.dear, count: dearCount, currentUserDear },
      sad: { users: sad.sad, count: sadCount, currentUserSad },
      wow: { users: wow.wow, count: wowCount, currentUserWow },
      haha: { users: haha.haha, count: hahaCount, currentUserHaHa },
      angry: { users: angry.angry, count: angryCount, currentUserAngry },
    };
  }

  async postImgPost(postId:number, imgPost:string, mediaType:mediaType, user:any){
    const post = await this.postRepository.findOne({where:{id:postId}})
    const userFind = await this.userRepository.findOne({where:{id:user.id}})
    
    const result = this.mediaPostRepository.create({
      mediaType:mediaType,
      url:imgPost,
      user:userFind,
      posts:post
    })

    return await this.mediaPostRepository.save(result)
  }


  async getImgPost(postId:number){
    const post = await this.postRepository.findOne({where:{id:postId}})
    const media = await this.mediaPostRepository.find({where:{posts:post}})
    return media
  }

  async getPostForIdPost(postId:number){
    const post = await this.postRepository.findOne({where:{id:postId}, relations:['user']})
    return post
  }

}
