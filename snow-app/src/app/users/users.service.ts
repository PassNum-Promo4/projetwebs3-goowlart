import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  getUsers(){
    return[
      {id:'suau4', name: 'Alex'},
      {id:'72772a', name: 'Alejandro'}
    ];
  }
  getUser(id: String){
    let users = this.getUsers();
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (user.id == id) {
          return user;
        }
        return null
    }
  }



  constructor() { }

}
