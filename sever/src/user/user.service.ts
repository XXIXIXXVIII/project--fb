import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from 'src/dtos/user.dto';
import { MediaPost } from 'src/typeorm/entity/MediaPost.entity';
import { User } from 'src/typeorm/entity/User.entity';
import { Not, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(MediaPost)
    private mediaPostRepository: Repository<MediaPost>,
  ) {}
  async UserDetai(id: string) {
    const userDetail = await this.usersRepository.findOne({ where: { id } });
    if (!userDetail) {
      throw new NotFoundException();
    }
    delete userDetail.password;
    return userDetail;
  }

  async getListFriendsArrayId(id: string) {
    const userfr = await this.usersRepository
      .createQueryBuilder()
      .select(['DISTINCT userId_1', 'userId_2'])
      .from('user_friends_user', 'ufu')
      .where('ufu.userId_1 = :id', { id: id })
      .orWhere('ufu.userId_2 = :id', { id: id })
      .getRawMany();

    const listFriends = userfr.map((friend) => {
      if (friend.userId_1 === id) {
        return friend.userId_2;
      } else {
        return friend.userId_1;
      }
    });
    return listFriends;
  }

  async getListFriends(id: string) {
    const listFriends = await this.getListFriendsArrayId(id);

    const friends = listFriends.map((friend) => {
      const userfr = this.usersRepository
        .createQueryBuilder('user')
        .where({ id: friend })
        .leftJoinAndSelect('user.friends', 'friend')
        .select([
          'user',
          'friend.id',
          'friend.firstName',
          'friend.lastName',
          'friend.avatar',
        ])
        .getOne();
      return userfr;
    });
    const listFriends1 = await Promise.all(friends);

    let newUser: any[] = listFriends1.map((user) => {
      let result = user.friends?.filter((friend) =>
        listFriends.includes(friend.id),
      );

      return { ...user, mutualFriends: result };
    });
    return newUser;
  }

  // lấy dữ liệu lời mời kết bạn
  async getListFriendsRequest(user: any) {
    const listFriends = await this.getListFriendsArrayId(user.id);

    const userrq = await this.usersRepository
      .createQueryBuilder()
      .select(['DISTINCT userId_1', 'userId_2'])
      .from('user_request_user', 'uru')
      .where('uru.userId_2 = :id', { id: user.id })
      .getRawMany();

    const listReqFriends = userrq.map((friend) => {
      if (friend.userId_1 === user.id) {
        return friend.userId_2;
      } else {
        return friend.userId_1;
      }
    });

    const friends = listReqFriends.map((friend) => {
      const userfr = this.usersRepository
        .createQueryBuilder('user')
        .where({ id: friend })
        .leftJoinAndSelect('user.friends', 'friend')
        .select([
          'user',
          'friend.id',
          'friend.firstName',
          'friend.lastName',
          'friend.avatar',
        ])
        .getOne();
      return userfr;
    });

    const listFriends1 = await Promise.all(friends);

    let newUser: any[] = listFriends1.map((user) => {
      let result = user.friends?.filter((friend) =>
        listFriends.includes(friend.id),
      );

      return { ...user, mutualFriends: result };
    });

    return newUser;
  }

  // ===Gửi lời mời kết bạn===
  async postReqFriend(user: any, friendId: string) {
    try {
      const userFind = await this.usersRepository
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.request', 'request')
        .where({ id: user.id })
        .getOne();

      const friend = await this.usersRepository.findOne({
        where: { id: friendId },
      });

      if (userFind && friend) {
        if (!userFind.request) {
          userFind.request = [];
        }
        userFind.request.push(friend);
        await this.usersRepository.save(userFind);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // đồng ý kết bạn
  async acceptReqFriend(user: any, friendId: string) {
    try {
      const deleteResult = await this.usersRepository
        .createQueryBuilder()
        .delete()
        .from('user_request_user')
        .where('userId_1 = :userId_1', { userId_1: friendId })
        .andWhere('userId_2 = :userId_2', { userId_2: user.id })
        .execute();

      if (deleteResult.affected === 0) {
        throw new NotFoundException('Request not found');
      }

      const user1 = await this.usersRepository
        .createQueryBuilder()
        .insert()
        .into('user_friends_user')
        .values([{ userId_1: user.id, userId_2: friendId }])
        .execute();

      return { success: true };
    } catch (error) {
      console.log(error);
      throw new NotFoundException('something wrong');
    }
  }

  // ==== đã gửi lời mời kết bạn chưa ====
  async sentFriendRequest(user: any, friendId: string) {
    const result = await this.usersRepository
      .createQueryBuilder('user')
      .select(['DISTINCT userId_1', 'userId_2'])
      .from('user_request_user', 'uru')
      .where('uru.userId_1 = :userId_1', { userId_1: user.id })
      .andWhere('uru.userId_2 = :userId_2', { userId_2: friendId })
      .getRawOne();
    if (result) {
      return 'sent';
    }

    return 'unknow';
  }

  async getImgForUser(userId: string) {
    try {
      const imgUser = await this.mediaPostRepository.find({
        relations: ['user'],
        where: { user: { id: userId }, mediaType: 'image' },
      });
      return imgUser;
    } catch (error) {
      console.log(error);
    }
  }

  async postCoverImg(user: any, coverImg: string) {
    const userFind = await this.usersRepository.findOne({
      where: { id: user.id },
    });
    userFind.coverImage = coverImg;
    return await this.usersRepository.save(userFind);
  }

  async postAvarta(user: any, avarta: string) {
    const userFind = await this.usersRepository.findOne({
      where: { id: user.id },
    });
    userFind.avatar = avarta;
    return await this.usersRepository.save(userFind);
  }

  async getAllUser(user: any) {
    const currentUser = await this.usersRepository.findOne({
      where: { id: user.id },
      relations: ['friends', 'request'],
    });
    
    console.log(currentUser)

    const users = await this.usersRepository.find({
      where: { id: Not(user.id) }
    });

    const filteredUsers = users.filter(u => !currentUser.friends.some(friend => friend.id === u.id));

    const userList = users.filter(u=>!currentUser.request.some(friend => friend.id === u.id))
    
    return userList;
  }
  async changeStory(user:any, story:string){
    const currentUser =  await this.usersRepository.findOne({where:{id:user.id}})
    currentUser.bio = story
    await this.usersRepository.save(currentUser)
    return currentUser
  }
}
