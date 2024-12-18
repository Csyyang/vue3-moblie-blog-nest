import { IsIn, IsNumber, IsString } from 'class-validator';

export class AddArticleDto {
  /**
   * 文章标题
   */
  @IsString()
  articleTitle: string;

  /**
   * 文章内容
   */
  @IsString()
  articleContext: string;

  /**
   * 文章分类
   */
  @IsIn(['0', '1'])
  articleType: string;

  /**
   * 预览图地址
   */
  @IsNumber()
  imageId: number;
}
