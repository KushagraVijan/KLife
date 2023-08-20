import { Component } from '@angular/core';
import { Users } from '../models/users.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  error = "";
  isPass = false;
  users: Users = new Users();
  selectedUser: any;

  isCorrectSecret(inp: string): void {
    this.users.getUsers().forEach(user => {
      if(!this.isPass && user.getSecretName()==inp) {
        this.selectedUser = user;
        this.isPass = true;      
      }
    });
  }

  submitSecret(data: any) {    
    this.isCorrectSecret(data.input.toLowerCase());

    if(this.isPass)
    {
      this.error = "";
    } else {
      this.error = "Wrong input";  
    }
  }

  isPassFalse(): void {
    this.isPass = false;
  }
}
