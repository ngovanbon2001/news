import { NewsEntity } from "src/news/news.entity/news.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('categories')
export class CategoryEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 255 }) 
    name: string;
  
    @OneToMany(() => NewsEntity, news => news.category)
    news: NewsEntity[];
}
