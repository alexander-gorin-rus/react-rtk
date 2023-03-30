import React, { FC } from "react";
import { IChequeProps } from "../Cheque.type";
import Styles from "../ChequeStyle.module.css";

const ChequePays: FC<IChequeProps> = ({ cheque: { pays } }) => {
  const total = pays?.reduce((acc, curr) => acc + curr.sum, 0) || 0;
  return (
    <div className={Styles.chequeItem}>
      <span>{total}</span>
    </div>
  );
};

export default ChequePays;
