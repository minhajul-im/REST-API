import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { createPaginatedResponse } from '../common/utils/pagination.util';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response.dto';
import {
  createSingleResponse,
  operationResponse,
  operationResponseWithoutData,
} from '../common/utils/response.util';
import { SingleResponseDto } from 'src/common/dto/single-response.dto';
import {
  OperationResponseDto,
  OperationResponseDtoWithoutData,
} from 'src/common/dto/operation-response.dto';
import { CreatePostDto, GetPostDto, UpdatePostDto } from './posts.dto';

@Injectable()
export class PostsService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private readonly httpService: HttpService) {}

  async create(
    createPostDto: CreatePostDto,
  ): Promise<OperationResponseDto<GetPostDto>> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post<GetPostDto>(this.baseUrl, createPostDto),
      );

      if (!data) {
        throw new HttpException(
          'Failed to create post',
          HttpStatus.BAD_REQUEST,
        );
      }

      const postInstance = plainToInstance(GetPostDto, data, {
        excludeExtraneousValues: true,
      });

      const validationResult = await validate(postInstance);

      if (validationResult.length > 0) {
        throw new HttpException('Invalid post', HttpStatus.BAD_REQUEST);
      }

      return operationResponse('Post created successfully', postInstance);
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(
        'Failed to create post',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(
    page: number,
    limit: number,
  ): Promise<PaginatedResponseDto<GetPostDto>> {
    const cacheKey = `posts:page:${page}:limit:${limit}`;

    try {
      const { data } = await firstValueFrom(
        this.httpService.get<GetPostDto[]>(this.baseUrl),
      );

      if (!Array.isArray(data)) {
        throw new HttpException(
          'Invalid response shape',
          HttpStatus.BAD_GATEWAY,
        );
      }

      const postInstances = plainToInstance(GetPostDto, data, {
        excludeExtraneousValues: true,
      });

      const validationResults = await Promise.all(
        postInstances.map((post) => validate(post)),
      );

      const validatedPosts: GetPostDto[] = [];
      const errors: string[] = [];

      validationResults.forEach((errs, idx) => {
        if (errs.length === 0) {
          validatedPosts.push(postInstances[idx]);
        } else {
          errors.push(...errs.map((e) => e.toString()));
        }
      });

      if (validatedPosts.length === 0) {
        throw new HttpException(
          'No valid posts after validation',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      if (errors.length > 0) {
        console.warn(`Filtered ${errors.length} invalid posts:`, errors);
      }

      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const posts = validatedPosts.slice(startIndex, endIndex);
      const total = validatedPosts.length;

      const result = createPaginatedResponse(posts, total, page, limit);

      return result;
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(
        'Failed to process posts',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number): Promise<SingleResponseDto<GetPostDto>> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get<GetPostDto>(`${this.baseUrl}/${id}`),
      );

      if (!data) {
        throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
      }

      const postInstance = plainToInstance(GetPostDto, data, {
        excludeExtraneousValues: true,
      });

      const validationResult = await validate(postInstance);

      if (validationResult.length > 0) {
        throw new HttpException('Invalid post', HttpStatus.BAD_REQUEST);
      }

      return createSingleResponse(postInstance);
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(
        'Failed to get post',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(
    id: number,
    _updatePostDto: UpdatePostDto,
  ): Promise<OperationResponseDto<GetPostDto>> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.put<GetPostDto>(
          `${this.baseUrl}/${id}`,
          _updatePostDto,
        ),
      );

      if (!data) {
        throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
      }

      const postInstance = plainToInstance(GetPostDto, data, {
        excludeExtraneousValues: true,
      });

      const validationResult = await validate(postInstance);

      if (validationResult.length > 0) {
        throw new HttpException('Invalid post', HttpStatus.BAD_REQUEST);
      }

      return operationResponse('Post updated successfully', postInstance);
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(
        'Failed to update post',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: number): Promise<OperationResponseDtoWithoutData> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.delete<GetPostDto>(`${this.baseUrl}/${id}`),
      );

      if (!data) {
        throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
      }

      return operationResponseWithoutData('Post removed successfully');
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(
        'Failed to remove post',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
