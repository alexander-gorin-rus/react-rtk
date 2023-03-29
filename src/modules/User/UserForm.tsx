import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import Input from '../../components/Input';
import { ApiStatus, IUserForm } from './User.type';
import Styles from './UserFormStyle.module.css'
import { createUserAction, resetCreateListStatus } from './UserSlice';

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { createUserFormStatus } = useAppSelector((state: RootState) => state.user)

  const dispatch = useAppDispatch();

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const data: IUserForm = { name, email }
    dispatch(createUserAction(data))
  }

  useEffect(() => {
    if (createUserFormStatus === ApiStatus.success) {
      setName("")
      setEmail("")
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