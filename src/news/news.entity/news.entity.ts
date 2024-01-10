// news.entity.ts
import { CategoryEntity } from 'src/category/category.entity/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('news')
export class NewsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => CategoryEntity, category => category.news)
  category: CategoryEntity;
}
