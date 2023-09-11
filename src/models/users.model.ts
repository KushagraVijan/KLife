import { User } from "./user.model";

export class Users {
    private users: User[];

    getUsers(): User[] {
        return this.users;
    }

    getAdmin(): any {
        return this.users.find((user) => {
            return user.isAdminUser();
        });
    }

    getUserBySecretName(secret: string): any {
        return this.users.find((user) => {
            if(user.getSecretName()==secret) return true;
            else return false;
        });
    }

    constructor() {
        this.users = [
            new User('divu', 'Divye Chopra', 'm', 'Male BFF', true, false),
            new User('anshiii', 'Anshika Saini', 'f', 'Female BFF', true, false),
            new User('kush', 'Kushagra', 'm', 'Myself', true, false),
            new User('sam', 'Sanyam Jain', 'm', 'Male BFF', true, false),
            new User('saira', 'Sairas Arora', 'm', 'Male BFF', true, false),
            new User('@dmink', '',  'm', '', false, true),
            new User('panda', 'Anshiii', 'f', 'My sweet and hot NTGF', false, false),
            new User('sparsh', 'Sparsh Goyal', 'm', 'Close Friend', true, false),
            new User('pratik', 'Pratik Asija', 'm', 'Flatmate', true, false)
        ];
    }
}