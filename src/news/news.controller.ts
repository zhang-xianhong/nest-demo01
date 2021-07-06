import { Controller, Get, Param, Query } from '@nestjs/common';

// 要使用 CLI 创建控制器，只需执行 $ nest g controller controller_name 命令。
@Controller('news') //Controller里面的参数就相当于是路由
export class NewsController {

    // 路由模糊匹配
    @Get('a*a')
    indexA() {
        return '新闻也，路由模糊匹配    '
    }


    // 装饰器中的可选值 
    // http://localhost:3000/news/add //未传id，则返回undefined
    // http://localhost:3000/news/add?id=123&name=zhangsan //传入id，则匹配返回对应的id：123
    @Get('add')
    addNews(@Query('id') id) {
        console.log(id);
        return '这是新闻增加';
    }


    // 获取动态路由 //http://localhost:3000/news/123
    @Get(':id') 
    index(@Param() param) {
        console.log(param);
        return '这是新闻页面，获取动态路由';
    }
}
