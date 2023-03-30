import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import Input from '../../components/Input';
import SelectInput from '../../components/Select';
import { ApiStatus, IChequeForm, IPays, IPositions } from './Cheque.type';
import { createChequeAction, resetCreateListStatus } from './ChequeSlice';
import Styles from './ChequeStyle.module.css'

const ChequeForm = () => {
  
  const [dateReg, setDateReg] = useState(new Date());
  const [kioskName, setKioskame] = useState("");
  const [chequeType, setChequeType] = useState("");
  const [pays, setPays] = useState();
  const [sum, setSum] = useState<number>();
  const [positions, setPositions] = useState<IPositions[]>()


  const { createUserFormStatus } = useAppSelector((state: RootState) => state.user)

  const dispatch = useAppDispatch();

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const data: IChequeForm = {
      dateReg,
      kioskName,
      chequeType,
      pays,
      sum,
      positions}
      setDateReg(new Date())
    dispatch(createChequeAction(data))
  }

  useEffect(() => {
    if (createUserFormStatus === ApiStatus.success) {
      dispatch(resetCreateListStatus())
    }
  },[createUserFormStatus]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setChequeType(event.target.value);
  };

  return (
    <div className={Styles.container}>
      <form className={Styles.form} onSubmit={onSubmitForm}>
        <Input 
          label="Название киоска"
          type="text"
          value={kioskName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setKioskame(e.target.value)
          }}
        />
        <SelectInput
          label="Тип чека"
          value={chequeType}
          onChange={handleChange}
          options={[
            { value: "0", label: "0" },
            { value: "1", label: "1" },
          ]}
          chequeType={chequeType}
        />
        {/* <Input
          label="Сумма"
          type="number"
          value={pays?.toString() ?? ''}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const value = parseFloat(e.target.value);
            setPays(value);
          }}
        /> */}
        <Input
          label="Сумма"
          type="number"
          value={sum?.toString() ?? ''}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const value = parseFloat(e.target.value);
            setSum(value);
          }}
        />
        <div className={Styles["btn-wrapper"]}>
          <input type="submit" value="Отправить" />
        </div>
      </form>
    </div>
  )
}

export default ChequeForm