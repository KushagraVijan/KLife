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
            new User('divu', 'Divye Chopra', 'm', 'Male BFF', 'Saharanpur', '20th November', true, true, false),
            new User('anshiii', 'Anshika Saini', 'f', 'Female BFF', 'Saharanpur', '17th November', true, true, false),
            new User('kush', 'Kushagra', 'm', 'Myself', 'Saharanpur', 'Secret Day', true, true, false),
            new User('sam', 'Sanyam Jain', 'm', 'Male BFF', 'Saharanpur', '26th November', true, true, false),
            new User('megha', 'Palak Srivastava', 'f', 'Friend', 'Roorkee', '21st May', true, true, false),
            new User('saira', 'Sairas Arora', 'm', 'Male BFF', 'Faridkot', '16th September', true, true, false),
            new User('@dmink', '',  'm', '', '', '', false, false, true),
            new User('shivu', 'Shivangi Kaushik', 'f', 'Friend', 'Saharanpur', '21st November', true, true, false),
            new User('panda', 'Anshiii', 'f', 'My best friend', 'Saharanpur', '17th November', true, false, false),
            new User('sparsh', 'Sparsh Goyal', 'm', 'Close Friend', 'Bathinda', '28th June', true, true, false),
            new User('pratik', 'Pratik Asija', 'm', 'Flatmate', 'Rajpura', '1st December', true, true, false),
            new User('varun', 'Varun Bansal', 'm', 'Friend', 'Sangrur', '27th July', true, true, false),
            new User('aman', 'Aman Jain', 'm', 'Friend', 'Jaipur', '5th August', true, true, false),
            new User('himanchi', 'Himanshi Garg', 'f', 'Friend', 'Faridkot', '3rd October', true, true, false),
            new User('akshit', 'Akshit Jain', 'm', 'Friend', 'Saharanpur', '29th October', true, true, false)
        ];
    }
}
