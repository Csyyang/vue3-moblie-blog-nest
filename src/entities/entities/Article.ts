import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("article", { schema: "blog" })
export class Article {
  @PrimaryGeneratedColumn({ type: "int", name: "article_id", unsigned: true })
  articleId: number;

  @Column("varchar", { name: "article_title", length: 100 })
  articleTitle: string;

  @Column("date", { name: "article_date" })
  articleDate: string;

  @Column("varchar", { name: "article_desc", length: 100 })
  articleDesc: string;

  @Column("mediumtext", { name: "article_context" })
  articleContext: string;

  @Column("varchar", { name: "article_type", length: 20 })
  articleType: string;

  @Column("varchar", { name: "article_url", length: 100 })
  articleUrl: string;
}
