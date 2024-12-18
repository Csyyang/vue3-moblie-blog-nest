import { Upload } from 'src/upload/entities/files.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('article', { schema: 'blog' })
export class Article {
  @PrimaryGeneratedColumn({ type: 'int', name: 'article_id', unsigned: true })
  articleId: number;

  @Column('varchar', { name: 'article_title', length: 100 })
  articleTitle: string;

  @Column('datetime', {
    name: 'article_date',
    default: () => 'CURRENT_TIMESTAMP',
  })
  articleDate: string;

  @Column('varchar', { name: 'article_desc', length: 100, nullable: true })
  articleDesc: string;

  @Column('mediumtext', { name: 'article_context' })
  articleContext: string;

  @Column('varchar', { name: 'article_type', length: 20 })
  articleType: string;

  @Column('varchar', { name: 'article_url', length: 100, nullable: true })
  articleUrl: string;

  @ManyToOne(() => Upload, (Upload) => Upload.id)
  @JoinColumn({ name: 'image_id' })
  image: Upload;
}
