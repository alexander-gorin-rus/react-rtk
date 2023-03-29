import ApiConfig from '../../service/ApiConfig';
import httpService from '../../service/HttpService';
import { ICheque } from './Cheque.type';

export const getChequesListApi = async () => {
    return await httpService.get<ICheque[]>(ApiConfig.cheques);
} 
