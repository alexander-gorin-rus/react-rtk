import { ICheque } from "../../modules/Cheques/Cheque.type";
export interface IProps {
  onRerenderClick: () => void;
  onClose: () => void;
  cheque?: ICheque | null;
}
