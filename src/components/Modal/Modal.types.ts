import { ICheque } from "../../modules/Cheques/Cheque.type";
import { IUser } from "../../modules/User/User.type";

export interface IProps {
    onRerenderClick: () => void;
    onClose: () => void;
    user?: IUser | null;
    cheque?: ICheque | null
}