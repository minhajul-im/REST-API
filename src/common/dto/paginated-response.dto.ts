import { Expose, Type } from 'class-transformer';
import { PaginationDto } from './pagination.dto';

export class PaginatedResponseDto<T> {
  @Expose()
  success: boolean;

  @Expose()
  @Type(() => Object)
  data: T[];

  @Expose()
  @Type(() => PaginationDto)
  meta: PaginationDto;
}
