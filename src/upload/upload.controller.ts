import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { diskStorage } from 'multer';
import * as path from 'path';
import * as fs from 'fs';
import { Public } from 'src/common/decorators/public.decorator';
import { ConfigService } from '@nestjs/config';

@Controller('upload')
export class UploadController {
  constructor(
    private readonly uploadService: UploadService,
    private configService: ConfigService,
  ) {}

  @Get()
  findAll() {
    return this.uploadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uploadService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uploadService.remove(+id);
  }

  @Post('picture')
  @Public()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        // 设置文件存储的目录为 static 文件夹
        destination: (req, file, callback) => {
          const uploadPath = path.join(__dirname, '..', 'static');
          // 如果 static 文件夹不存在，则创建
          if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath);
          }
          callback(null, uploadPath);
        },
        // 文件名以当前时间戳 + 原始文件名进行命名
        filename: (req, file, callback) => {
          const fileName = `${Date.now()}-${file.originalname}`;
          callback(null, fileName);
        },
      }),
    }),
  )
  async updatePicture(@UploadedFile() file: Express.Multer.File) {
    // 入库
    const path = `${this.configService.get<string>('UPLOAD_DIR')}${file.filename}`;

    try {
      await this.uploadService.updatePicture({
        filepath: path,
        filename: file.filename,
      });
      return `${this.configService.get<string>('UPLOAD_DIR')}${file.filename}`;
    } catch (error) {
      console.log(error);
      return JSON.stringify(error);
    }
  }
}
