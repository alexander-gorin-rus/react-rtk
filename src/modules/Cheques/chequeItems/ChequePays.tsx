import React, { FC } from 'react'
import { IChequeProps } from '../Cheque.type'

const ChequePays: FC<IChequeProps> = ({ cheque: {
    pays
  } }) => {
    
  return (
    <div>
      {pays.map((item) => (
        <span className='cellItem' key={item.id}>{item.sum}</span>
      ))}
    </div>
  )
}

export default ChequePays