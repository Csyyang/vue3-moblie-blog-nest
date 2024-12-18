import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { Public } from 'src/common/decorators/public.decorator';
import { AddArticleDto } from './dto/add-article.dto';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create() {
    return this.articleService.create();
  }

  @Get('getAll')
  @Public()
  async findAll() {
    return this.articleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.articleService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleService.remove(+id);
  }

  @Post('add')
  @Public()
  async addArticle(@Body() articleData: AddArticleDto) {
    try {
      await this.articleService.addArticle(articleData);

      return '添加成功';
    } catch (error) {
      return error;
    }
  }
}
