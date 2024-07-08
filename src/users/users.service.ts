import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

private users = [
    {id:1, name:'John Doe', phone:'132456789'},
    {
        id:2, name:'Jane Doe', phone :'012455678'
    }
]

getUsers(){
    return this.users;
}

}
