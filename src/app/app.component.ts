import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string;
  isPass = false;

  constructor() {
    this.title = "";
  }

  submitSecret(data: any) {
    if(data.input.toLowerCase()=="divu" || data.input.toLowerCase()=="anshiii" || data.input.toLowerCase()=="kush" || data.input.toLowerCase()=="sam")
    {
      this.title = data.input;
      this.isPass = true;
    } 
  }
}
