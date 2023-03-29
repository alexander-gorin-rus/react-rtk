import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import Input from '../../components/Input';
import { ApiStatus, ICheque, IChequeForm } from './Cheque.type';
import { createChequeAction, resetCreateListStatus } from './ChequeSlice';
import Styles from './UserFormStyle.module.css'

const UserForm = () => {
  const [dateReg, setDateReg] = useState("");
  const [kioskName, setKioskame] = useState("");
  const [chequeType, setChequeType] = useState<number>();
  const [pays, setPays] = useState();


  const { createUserFormStatus } = useAppSelector((state: RootState) => state.user)

  const dispatch = useAppDispatch();

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const data: IChequeForm = { dateReg,
      kioskName,
      chequeType,
      pays,
      sum,
      positions,}
    dispatch(createChequeAction(data))
  }

  useEffect(() => {
    if (createUserFormStatus === ApiStatus.success) {
      dispatch(resetCreateListStatus())
    }
  },[createUserFormStatus]);

  return (
    <div className={Styles.container}>
      <form className={Styles.form} onSubmit={onSubmitForm}>
        <Input 
          label="Name"
          type="text"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value)
          }}
        />
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value)
          }}
        />
        <div className={Styles["btn-wrapper"]}>
          <input type="submit" value="Create" />
        </div>
      </form>
    </div>
  )
}

export default UserForm