import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsEntity } from './news.entity/news.entity';
import { CreateNewDto } from './dto/create-new.dto';
import { CheckTokenMiddleware } from 'src/middleware/token.middleware';

@Controller('news')
export class NewsController {
    constructor(private newService: NewsService) {

    }
  
    @Get()
    findAll(): Promise<NewsEntity[]> {
      return this.newService.findAll()
    }
  
    @Get(':id')
    get(@Param() params) {
      return this.newService.findOne(params.id);
    }
  
    @Post()
    async create(@Body() createNewDto: CreateNewDto): Promise<NewsEntity> {
    console.log("run1");

      return this.newService.create(createNewDto);
    }
  
    @Put()
    update(@Body() news: NewsEntity) {
      return this.newService.update(news);
    }
  
    @Delete(':id')
    deleteUser(@Param() params) {
      return this.newService.delete(params.id);
    }
}
