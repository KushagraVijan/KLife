import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Users } from 'src/models/users.model';

@Component({
  selector: 'character',
  templateUrl: './character.component.html'
})

export class CharacterComponent {
    @Input() user: any;  
    @Output() passFalse = new EventEmitter();

    u: Users = new Users;
    fromAdmin: boolean = false;

    ngOnInit() {
      this.fromAdmin = this.user.isAdmin;
    }

    openUser(u: any) {
      this.user = u;
    }

    goToMainPage() {
      this.passFalse.emit();
    }

    goToAdminPage() {
      this.user = this.u.getAdmin();
    }
}
