import { IUser } from "./iuser";

export interface LoginDto {
    accessToken: string;
    user: IUser;
}
