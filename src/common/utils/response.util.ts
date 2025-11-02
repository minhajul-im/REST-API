import {
  OperationResponseDto,
  OperationResponseDtoWithoutData,
} from '../dto/operation-response.dto';

export function createSingleResponse<T>(data: T): {
  success: true;
  data: T;
} {
  return {
    success: true,
    data,
  };
}

export const operationResponse = <T>(
  message: string,
  data: T,
): OperationResponseDto<T> => {
  return {
    status: true,
    message,
    data,
  };
};

export const operationResponseWithoutData = (
  message: string,
): OperationResponseDtoWithoutData => {
  return {
    status: true,
    message,
  };
};
