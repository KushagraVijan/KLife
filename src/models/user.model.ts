export class User {
    private secretName: string;
    private fullName: string;
    private gender: string;
    private relation: string;
    private homeTown: string;
    private birthday: string;
    private visibleToAdmin: boolean;
    private isAdmin: boolean;
    private path: string = '../assets/images/';

    getSecretName(): string {
        return this.secretName;
    }

    getImageLocation(): string {
        if(this.getGender()=='m') {
            return this.path + 'boy_icon.png';
        } else if(this.getGender()=='f') {
            return this.path + 'girl_icon.png';
        }
        
        return '';
    }

    getGender(): string {
        return this.gender.toLowerCase();
    }

    isVisibleToAdmin(): boolean {
        return this.visibleToAdmin;
    }

    isAdminUser(): boolean {
        return this.isAdmin;
    }

    constructor(secretName: string, fullName: string, gender: string, relation: string, homeTown: string, birthday: string, visibleToAdmin: boolean, isAdmin: boolean) {
        this.secretName = secretName;
        this.fullName = fullName;
        this.gender = gender;
        this.relation = relation;
        this.homeTown = homeTown;
        this.birthday = birthday;
        this.visibleToAdmin = visibleToAdmin;
        this.isAdmin = isAdmin;
    }
}