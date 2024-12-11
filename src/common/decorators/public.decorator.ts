import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';

// SetMetadata 为内置装饰器，将元数据附加到路由处理器
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
