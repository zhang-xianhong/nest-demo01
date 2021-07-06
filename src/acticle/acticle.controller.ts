import { Controller, Get } from '@nestjs/common';

@Controller('acticle') //装饰器
// @Controller('bbb') //可以自定义访问的路径
export class ActicleController {

    // 直接访问 默认访问根路径的acticle
    // http://localhost:3000/acticle
    @Get()
    index() {
        return '我是文章页面';
    }

    // http://localhost:3000/acticle/add
    @Get('add')
    addArticle(): string {
        return "增加新闻页面";
    }
}
