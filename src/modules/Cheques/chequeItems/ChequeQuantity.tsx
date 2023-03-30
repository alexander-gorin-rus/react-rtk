import React, { FC } from 'react'
import { IChequeProps } from '../Cheque.type'
import Styles from '../ChequeStyle.module.css'

const ChequeQuantity: FC<IChequeProps> = ({ cheque: {
    positions,
  } }) => {
    
  return (
    <div className={Styles.chequeItem}>
      {positions && positions.map((item) => (
        <span key={item.chequeId} className='cellItem'>{item.quantity}</span>
      ))}
    </div>
  )
}

export default ChequeQuantity