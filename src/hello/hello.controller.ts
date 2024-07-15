import { Controller,Get, HttpCode, Param, ParseIntPipe } from '@nestjs/common';

@Controller()
export class HelloController {
    @Get('/hello')
    getHello(): string {
        return 'Hola Mundo!';
    }


    @Get('notfound')
    @HttpCode(404)
    notFoundPage(){
        return '404 not founddddddd'
    }

    @Get('error')
    @HttpCode(500)
    errorPage(){
        return 'Error Route'
    }

    @Get('ticket/:num')
    getNumber(@Param('num',ParseIntPipe) num:number){
        return num + 14
    }

}


