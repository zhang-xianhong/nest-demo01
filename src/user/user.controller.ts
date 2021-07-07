import { Body, Controller, Get, Post, Query, Request } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get() 
    index(): string {
        return '用户首页';
    }

    // 通过@Query装饰器获取get传值 //http://localhost:3000/user/add?id=3&name=zhangxianhong
    @Get('add') 
    addData(@Query() query): any {
        // return '增加用户数据'; 
        console.log(query); //{ id: '3', name: 'zhangxianhong' }
        return query;
    }

    // 通过@Request装饰器获取Get传值 //http://localhost:3000/user/edit?name=zhangsan&password=123456
    // 装饰器就相当于是一个方法
    @Get('edit')
    editData(@Request() req) {
        console.log(req);
        console.log(req.query); //{ name: 'zhangsan', password: '123456' }
        return '通过Request获取get传值';
    }

    // post方法在Postman工具中进行模拟
    @Post('create') 
    create() {
        console.log('触发了Post方法');
        return '我是Post方法';
    }

    // 获取Post传值————通过@Body装饰器获取
    // http://localhost:3000/user/creates
    @Post('creates') 
    creates(@Body() body) {
        console.log('触发了post方法');//{ type: 'pop', page: '1', name: 'zhangsan', age: '20' }
        console.log(body);
        return '我是Post方法';
    }
}
