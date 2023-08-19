export class User {
    private secretName: string;
    private fullName: string;
    private relation: string;
    private visibleToAdmin: boolean;
    private isAdmin: boolean;

    getSecretName(): string {
        return this.secretName;
    }

    isVisibleToAdmin(): boolean {
        return this.visibleToAdmin;
    }

    isAdminUser(): boolean {
        return this.isAdmin;
    }

    constructor(secretName: string, fullName: string, relation: string, visibleToAdmin: boolean, isAdmin: boolean) {
        this.secretName = secretName;
        this.fullName = fullName;
        this.relation = relation;
        this.visibleToAdmin = visibleToAdmin;
        this.isAdmin = isAdmin;
    }
}