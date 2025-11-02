import { Expose, Type } from 'class-transformer';

export class SingleResponseDto<T> {
  @Expose()
  success: boolean;

  @Expose()
  @Type(() => Object)
  data: T;
}
