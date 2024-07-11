import {Controller, Get, Post, Put, Delete, Patch,Body, Query,Param,UsePipes, ValidationPipe} from '@nestjs/common' 
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';



@Controller('/tasks')
export class TaskController{

    
//funcion que se ejecuta apenas la clase es instanciada

    constructor(private tasksService: TasksService){
    }

    @Get()
    getAllTasks(@Query() query:any){
        console.log(query)
        return this.tasksService.getTasks();
    }

    @Get('/:id')
    getTask(@Param('id')id:string){
        return this.tasksService.getTask(parseInt(id))
    }

    @Post()
    @UsePipes(new ValidationPipe()) 
    createTask(@Body() task:CreateTaskDto){
        return this.tasksService.createTask(task);
    }

    
    @Put()
    updateTask(@Body() task: UpdateTaskDto){
        return this.tasksService.updateTask(task);
    }

    @Delete()
    deleteTask(){
        return this.tasksService.deleteTask();
    }

    
    @Patch()
    updateTaskStatus(){
        return this.tasksService.updateTaskStatus();
    }


}


