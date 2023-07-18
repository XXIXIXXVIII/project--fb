export interface PostDto {
  id: number,
  typePost:string,
  content:string,
  createdAt:string,
  view:number,
  background:string
  user:{
    id:number,
    avatar:string,
    firstName:string,
    lastName:string
  }
}

export interface userData{
  id:string|undefined,
  Wordplace?:string,
  avatar:string,
  birthday?:string,
  coverImage:string,
  firstName:string
  from?:string,
  gmail:string,
  hightSchool?:string,
  language?:string,
  lastName:string,
  liveAt?:string,
  sex:string,
  university?:string,
  bio?:string,
  mutualFriends?:userData[]|undefined
}

export interface currentUser{
  id?:number,
  avatar?: string,
  firstName?:string,
  lastName?:string
}