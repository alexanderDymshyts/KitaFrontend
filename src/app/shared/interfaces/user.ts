import { Role } from "../enums/eRole";

// export class User {
//     email: String;
//     role: Role;
//     token?: string;
// }

export interface IUser {
    email: String;
    role: Role;
    token?: string;
}