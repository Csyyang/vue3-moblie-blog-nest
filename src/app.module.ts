import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthGuard } from './common/guard/auth.guard';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransformResponseInterceptor } from './common/Interceptor/TransformResponseInterceptor.interceptor';
import { HttpExceptionFilter } from './common/exceptionFilter/HttpExceptionFilter';
import { ArticleModule } from './article/article.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '1.14.67.118',
      port: 3306,
      username: 'admin',
      password: 'admin',
      database: 'blog',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ArticleModule,
    UploadModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformResponseInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
