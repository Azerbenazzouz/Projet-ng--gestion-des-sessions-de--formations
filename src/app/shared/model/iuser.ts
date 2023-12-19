export interface IUser {
    name: string;
    telephone: string;
    email: string;
    password: string;
    role: string;
    img?:string;
    idSavedFormation?: number[];
    id: number;
}
