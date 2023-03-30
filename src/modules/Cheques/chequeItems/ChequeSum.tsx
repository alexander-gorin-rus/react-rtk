import React, { FC } from "react";
import { IChequeProps } from "../Cheque.type";

const ChequeSum: FC<IChequeProps> = ({ cheque: { sum } }) => {
  return <span className="cellItem">{sum}</span>;
};

export default ChequeSum;
