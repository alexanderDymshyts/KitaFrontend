import { Role } from "../enums/eRole";
export interface IUser {
    id: string;
    email: string;
    role: Role;
    token?: string;
}