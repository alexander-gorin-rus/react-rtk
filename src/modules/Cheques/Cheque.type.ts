import { ReactNode } from "react";

export interface ICheque {
    id: string;
    dateReg: ReactNode;
    kioskName: string;
    chequeType: number;
    pays: IPays[];
    sum: number;
    positions: IPositions[]
}

interface IPays {
    id: string;
    sum: number;
}

interface IPositions {
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

export interface IChequeProps {
    cheque: ICheque;
}