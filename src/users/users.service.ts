import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/task/dto/create-user.dto';

@Injectable()
export class UsersService {

private users :any[] = [
    {id:1,
    name:'John Doe',
    phone:'132456789'},
    {
        id:2, 
        name:'Jane Doe',
         phone :'012455678'
    }
]

getUsers(){
    return this.users;
}

createuser(user: CreateUserDto){

    this.users.push(user);
    return {
        ...user,
        id: this.users.length +1

    }
}



}
