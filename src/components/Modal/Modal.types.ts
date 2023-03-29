import { IUser } from "../../modules/User/User.type";

export interface IProps {
    title: string;
    children: JSX.Element;
    onClose: () => void;
    user?: IUser | null;
    
}