import React, { FC } from 'react'
import { IChequeProps } from '../Cheque.type';

const ChequeStatus: FC<IChequeProps> = ({ cheque: {
    pays,
    sum,
  } }) => {
    
    const PaymentStatus: FC<{ item: { sum: number } }> = ({ item }) => {
        if (item.sum === sum) {
          return <span className='cellItem'>Оплачено</span>;
        } else if (item.sum < sum && item.sum !== 0) {
          return <span className='cellItem'>Недоплата</span>;
        } else {
          return <span className='cellItem'>Нет оплаты</span>;
        }
      };
  return (
    <div>
      {pays.map((item) => (
        <PaymentStatus key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ChequeStatus