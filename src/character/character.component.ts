import { Component, Input } from '@angular/core';

@Component({
  selector: 'character',
  templateUrl: './character.component.html'
})

export class CharacterComponent {
    @Input() name: any;
    fullname = "";

    ngOnInit() {
      switch(this.name.toLowerCase()) {
        case "divu": this.fullname = "Divye Chopra";
        break;  
        case "anshiii": this.fullname = "Anshika Saini";
        break;
        case "kush": this.fullname = "Kushagra Vijan";
        break;     
        case "sam": this.fullname = "Sanyam Jain";
        break;
        default: this.fullname = "ERROR";
      }

        
    }
}
