import httpService from '../../service/HttpService';
import ApiConfig from '../../service/ApiConfig';
import { IUser, IUserForm } from './User.type';

export const getUsersListApi = async () => {
    return await httpService.get<IUser[]>(ApiConfig.user);
} 

export const createUserApi = async (data: IUserForm) => {
    return await httpService.post<IUser>(ApiConfig.user, data);
} 

export const updateUserApi = async (id: number, data: IUserForm) => {
    const url = `${ApiConfig.user}/${id}`
    return await httpService.put<IUser>(url, data);
} 

export const deleteUserApi = async (id: number) => {
    const url = `${ApiConfig.user}/${id}`
    return await httpService.delete<IUser>(url);
}
