import { Component, Input } from '@angular/core';
import { Users } from 'src/models/users.model';

@Component({
  selector: 'character',
  templateUrl: './character.component.html'
})

export class CharacterComponent {
    @Input() user: any;  
    u: Users = new Users;
    fromAdmin: boolean = false;

    ngOnInit() {
      this.fromAdmin = this.user.isAdmin;
    }

    openUser(u: any) {
      this.user = u;
    }

    goToAdminPage() {
      this.user = this.u.getAdmin();
    }
}
