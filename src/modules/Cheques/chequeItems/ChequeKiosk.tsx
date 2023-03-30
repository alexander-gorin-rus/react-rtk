import React, { FC } from "react";
import { IChequeProps } from "../Cheque.type";

const ChequeKiosk: FC<IChequeProps> = ({ cheque: { kioskName } }) => {
  return <span className="cellItem">{kioskName}</span>;
};

export default ChequeKiosk;
