import {Controller, Get, Post, Put, Delete, Patch} from '@nestjs/common' 
import { TasksService } from './tasks.service';



@Controller('/tasks')
export class TaskController{

    
//funcion que se ejecuta apenas la clase es instanciada

    constructor(private tasksService: TasksService){
    }

    @Get()
    getAllTasks(){
        return this.tasksService.getTasks();
    }

    @Post()
    createTask(){
        return this.tasksService.createTask();
    }

    
    @Put()

    updateTask(){
        return this.tasksService.updateTask();
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


