import React, { FC } from 'react';
import { IChequeProps } from '../Cheque.type';
import Styles from '../ChequeStyle.module.css'

const ChequeGoods: FC<IChequeProps> = ({ cheque: {
    positions,
  } }) => {
    
  return (
    <div className={Styles.chequeItem}>
        {positions.map((item) => (
            <span key={item.chequeId} className='cellItem'>{item.name}</span>
        ))}
    </div>
  )
}

export default ChequeGoods