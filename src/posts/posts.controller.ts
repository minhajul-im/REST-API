import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response.dto';
import { SingleResponseDto } from 'src/common/dto/single-response.dto';
import {
  OperationResponseDto,
  OperationResponseDtoWithoutData,
} from 'src/common/dto/operation-response.dto';
import { CreatePostDto, GetPostDto, UpdatePostDto } from './posts.dto';

@Controller('/api/v1/posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(
    @Body() createPostDto: CreatePostDto,
  ): Promise<OperationResponseDto<GetPostDto>> {
    return this.postsService.create(createPostDto);
  }

  @Get()
  findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<PaginatedResponseDto<GetPostDto>> {
    return this.postsService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SingleResponseDto<GetPostDto>> {
    return this.postsService.findOne(Number(id));
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<OperationResponseDto<GetPostDto>> {
    return this.postsService.update(Number(id), updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<OperationResponseDtoWithoutData> {
    return this.postsService.remove(Number(id));
  }
}
