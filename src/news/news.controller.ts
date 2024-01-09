import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { NewsService } from './news.service'
import { NewsEntity } from './news.entity/news.entity'

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
    create(@Body() news: NewsEntity) {
      return this.newService.create(news);
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
