import { ReactNode } from "react";

export interface ICheque {
    id: string;
    dateReg: any;
    kioskName: string;
    chequeType: string;
    pays: IPays[];
    sum: number;
    positions: IPositions[]
}

export interface IPays {
    id: string;
    sum: number;
}

export interface IPositions {
    chequeId: string;
    name: string;
    quantity: number;
    price: number
    sum: number
}

export interface IChequeState {
    list: ICheque[];
    listStatus: ApiStatus;
    createChequeFormStatus: ApiStatus
    updateChequeFormStatus: ApiStatus
}

export enum ApiStatus {
    "loading",
    "ideal",
    "success",
    "error"
}

export interface IChequeForm {
    id?: string;
    dateReg: Date;
    kioskName: string;
    chequeType: any;
    pays?: IPays[];
    sum?: number;
    positions?: IPositions[]
}

export interface IChequeProps {
    cheque: ICheque;
}


export interface IUpdateChequeActionProps {
    id?: string;
    chequeData: IChequeForm;
}