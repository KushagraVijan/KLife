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
            new User('divu', 'Divye Chopra', 'm', 'Male BFF', 'Saharanpur', '20th November', false, true, false),
            new User('anshiii', 'Anshika Saini', 'f', 'Female BFF', 'Saharanpur', '17th November', false, true, false),
            new User('kush', 'Kushagra', 'm', 'Myself', 'Saharanpur', 'Secret Day', true, true, false),
            new User('sam', 'Sanyam Jain', 'm', 'Male BFF', 'Saharanpur', '26th November', false, true, false),
            new User('megha', 'Palak Srivastava', 'f', 'Friend', 'Roorkee', '21st May', false, true, false),
            new User('saira', 'Sairas Arora', 'm', 'Male BFF', 'Faridkot', '16th September', true, true, false),
            new User('@dmink', '',  'm', '', '', '', false, false, true),
            new User('shivu', 'Shivangi Kaushik', 'f', 'Friend', 'Saharanpur', '21st November', false, true, false),
            new User('panda', 'Anshiii', 'f', 'My sweet and hot NTGF', 'Saharanpur', '17th November', false, false, false),
            new User('sparsh', 'Sparsh Goyal', 'm', 'Close Friend', 'Bathinda', '28th June', true, true, false),
            new User('pratik', 'Pratik Asija', 'm', 'Flatmate', 'Rajpura', '1st December', false, true, false),
            new User('varun', 'Varun Bansal', 'm', 'Friend', 'Sangrur', '27th July', false, true, false),
            new User('himanchi', 'Himanshi Garg', 'f', 'Friend', 'Faridkot', '3rd October', false, true, false)
        ];
    }
}