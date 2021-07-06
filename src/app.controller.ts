import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('news')
  getNews(): string {
    return 'I am news';
  }
  @Get('products') 
  getProducts(): string {
    return this.appService.getProducts();
  }
}
