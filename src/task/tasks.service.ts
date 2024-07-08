import { Injectable } from "@nestjs/common";


export interface User{
    name: string;
    age:number;
}




//inyectar codigo en otras partes de nuestra aplicacion
@Injectable()
export class TasksService {

    getTasks():User{
        return{
            name:"Jhon Doe",
            age:60
        }

    }

    createTask(){
        return 'Creando tareas'
    }

    updateTask(){
        return 'actualizando tareas'
    }

    deleteTask(){
        return 'Eliminando Tareas'
    }

    updateTaskStatus(){
        return 'actualizando el estado de una tarea'
    }
  

}