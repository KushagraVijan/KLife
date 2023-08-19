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
            new User('divu', 'Divye Chopra', 'Male BFF', true, false),
            new User('anshiii', 'Anshika Saini', 'Female BFF', true, false),
            new User('kush', 'Kushagra', 'Myself', true, false),
            new User('sam', 'Sanyam Jain', 'Male BFF', true, false),
            new User('@dmink', '', '', false, true),
            new User('panda', 'Anshiii', 'My sweet and hot NTGF', false, false)
        ];
    }
}