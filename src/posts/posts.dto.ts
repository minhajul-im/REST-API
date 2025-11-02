import { IsInt, IsString, MaxLength, MinLength } from 'class-validator';
import { Expose } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';

export class GetPostDto {
  @Expose()
  @IsInt()
  id: number;

  @Expose()
  @IsString()
  @MinLength(1, { message: 'Title is required and cannot be empty' })
  title: string;

  @Expose()
  @IsString()
  @MinLength(10, { message: 'Body must be at least 10 characters' })
  body: string;
}

export class CreatePostDto {
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  title: string;

  @IsString()
  @MinLength(1)
  @MaxLength(1000)
  body: string;
}

export class UpdatePostDto extends PartialType(CreatePostDto) {}
