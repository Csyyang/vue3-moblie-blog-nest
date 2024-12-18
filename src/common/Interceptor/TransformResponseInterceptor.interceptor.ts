import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// 成功 拦截器，统一处理成功返回报文格式
export class ApiResponse<T> {
  code: '00' | '01';
  data: T;
  message: string;
}

@Injectable()
export class TransformResponseInterceptor<T>
  implements NestInterceptor<T, ApiResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ApiResponse<T>> {
    return next.handle().pipe(
      map((data) => ({
        code: '00',
        data,
        message: 'Operation successful',
      })),
    );
  }
}
