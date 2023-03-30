import React, { FC } from "react";
import { IChequeProps } from "../Cheque.type";
import Styles from "../ChequeStyle.module.css";

const ChequeStatus: FC<IChequeProps> = ({ cheque: { pays, sum } }) => {
  const total = pays?.reduce((acc, curr) => acc + curr.sum, 0) || 0;

  const PaymentStatus = () => {
    if (total === sum) {
      return <span className="cellItem">Оплачено</span>;
    } else if (total < sum && total !== 0) {
      return <span className="cellItem">Недоплата</span>;
    } else if (total === 0) {
      return <span className="cellItem">Нет оплаты</span>;
    } else {
      return <span className="cellItem">Оплата превышает сумму чека</span>;
    }
  };
  return (
    <div className={Styles.chequeItem}>
      <PaymentStatus />
    </div>
  );
};

export default ChequeStatus;
