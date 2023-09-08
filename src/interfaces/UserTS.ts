export interface UserTS {
    id?: string;
    rol: UserRol;
    name: string;
    email: string;
    password: string;
}

export enum UserRol {
    admin = "ADMIN",
    user = "USER"
}