import { Expose, Type } from 'class-transformer';

export class OperationResponseDto<T> {
  @Expose()
  status: boolean;

  @Expose()
  message: string;

  @Expose()
  @Type(() => Object)
  data: T;
}

export class OperationResponseDtoWithoutData {
  @Expose()
  status: boolean;

  @Expose()
  message: string;
}
