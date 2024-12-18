import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';
import { AddArticleDto } from './dto/add-article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>,
  ) {}

  create() {
    return 'This action adds a new article';
  }

  async findAll() {
    return await this.articleRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }

  async addArticle(articleData: AddArticleDto) {
    console.log(articleData);
    const article = this.articleRepository.create({
      ...articleData,
      image: { id: articleData.imageId }, // 直接设置关联的部分对象
    });
    // return `This action adds a new article`;
    await this.articleRepository.save(article);
  }
}
