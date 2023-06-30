import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class LoginDTO{
  @IsEmail()
  @IsNotEmpty()
  gmail: string

  @IsNotEmpty()
  @IsString()
  password: string
}

export class SignupDTO{
  @IsEmail()
  @IsNotEmpty()
  gmail: string

  @IsNotEmpty()
  @IsString()
  password: string

  @IsNotEmpty()
  @IsString()
  firstName: string
  
  @IsNotEmpty()
  @IsString()
  lastName: string

  @IsNotEmpty()
  @IsString()
  birthday: string

  @IsNotEmpty()
  @IsString()
  sex: string
}