import { Injectable } from '@nestjs/common';
import { NewsEntity  } from './news.entity/news.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class NewsService {
    constructor(
        @InjectRepository(NewsEntity)
        private newRepository: Repository<NewsEntity>,
      ) {}
    
      async findAll (): Promise<NewsEntity[]> {
        return await this.newRepository.find();
      }
    
      async findOne (id): Promise<NewsEntity> {
        return await this.newRepository.findOne(id)
      }
    
    
      async create (news: NewsEntity): Promise<NewsEntity> {
        return await this.newRepository.save(news)
      }
    
      async update(news: NewsEntity): Promise<UpdateResult> {
        return await this.newRepository.update(news.id, news);
      }
    
      async delete(id): Promise<DeleteResult> {
        return await this.newRepository.delete(id);
      }
}
