import React, { FC } from 'react'
import { IChequeProps } from '../Cheque.type'

const ChequeType: FC<IChequeProps> = ({ cheque: {
    chequeType
  } }) => {
    
  return (
    <span className='cellItem'>{chequeType === "0" ? 'Продажа' : 'Возврат'}</span>
  )
}

export default ChequeType