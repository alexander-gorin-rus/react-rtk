import ApiConfig from "../../service/ApiConfig";
import httpService from "../../service/HttpService";
import { ICheque, IChequeForm } from "./Cheque.type";

export const getChequesListApi = async () => {
  return await httpService.get<ICheque[]>(ApiConfig.cheques);
};

export const createChequeApi = async (data: IChequeForm) => {
  return await httpService.post<IChequeForm>(ApiConfig.cheques, data);
};

export const updateChequeApi = async (id: string, data: IChequeForm) => {
  const url = `${ApiConfig.cheques}/${id}`;
  return await httpService.put<ICheque>(url, data);
};

export const deleteChequeApi = async (id: string) => {
  const url = `${ApiConfig.cheques}/${id}`;
  return await httpService.delete<ICheque>(url);
};
