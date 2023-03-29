import ApiConfig from '../../service/ApiConfig';
import httpService from '../../service/HttpService';
import { ICheque, IChequeForm } from './Cheque.type';

export const getChequesListApi = async () => {
    return await httpService.get<ICheque[]>(ApiConfig.cheques);
}

export const createChequeApi = async (data: IChequeForm) => {
    return await httpService.post<ICheque>(ApiConfig.user, data);
} 
