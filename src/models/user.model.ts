export class User {
    private secretName: string;
    private fullName: string;
    private gender: string;
    private relation: string;
    private visibleToAdmin: boolean;
    private isAdmin: boolean;

    getSecretName(): string {
        return this.secretName;
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

    constructor(secretName: string, fullName: string, gender: string, relation: string, visibleToAdmin: boolean, isAdmin: boolean) {
        this.secretName = secretName;
        this.fullName = fullName;
        this.gender = gender;
        this.relation = relation;
        this.visibleToAdmin = visibleToAdmin;
        this.isAdmin = isAdmin;
    }
}