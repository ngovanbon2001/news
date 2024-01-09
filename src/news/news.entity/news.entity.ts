import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class NewsEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 255 }) 
    title: string;
  
    @Column('text')
    content: string;
  
    @Column()
    status: boolean;
}
