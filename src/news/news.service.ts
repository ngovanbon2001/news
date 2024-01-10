import { Injectable } from '@nestjs/common';
import { NewsEntity  } from './news.entity/news.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';
import { CreateNewDto } from './dto/create-new.dto';

@Injectable()
export class NewsService {
    constructor(
        @InjectRepository(NewsEntity)
        private newRepository: Repository<NewsEntity>,
      ) {}
    
      async findAll (): Promise<NewsEntity[]> {
        return await this.newRepository.find({
          order: {id : "DESC"},
          relations: ['category']
        });
      }
    
      async findOne (id): Promise<NewsEntity> {
        return await this.newRepository.findOne({
          where: { id: id },
        });
      }
    
    
      async create (createNewDto: CreateNewDto): Promise<any> {
        return await this.newRepository.save(createNewDto)
      }
    
      async update(news: NewsEntity): Promise<UpdateResult> {
        return await this.newRepository.update(news.id, news);
      }
    
      async delete(id): Promise<DeleteResult> {
        return await this.newRepository.delete(id);
      }
}
