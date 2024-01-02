import { IUser } from "./iuser";

export interface RegisterDTO {
    accessToken: string;
    user: IUser;
}
