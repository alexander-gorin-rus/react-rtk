export interface IUser {
    id: number;
    name: string;
    email: string;
}

export enum ApiStatus {
    "loading",
    "ideal",
    "success",
    "error"
}

export interface IUserState {
    list: IUser[];
    listStatus: ApiStatus;
}

export const defaultList: IUser[] = [{
    id: 1,
    name: 'Alex',
    email: 'al.gorin78@gmail.com'
},
{

    id: 2,
    name: 'Zhenia',
    email: 'zheniya@gmail.com'
}

] 