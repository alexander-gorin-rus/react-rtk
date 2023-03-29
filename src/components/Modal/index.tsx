import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { ApiStatus, IUpdateUserActionProps, IUserForm } from '../../modules/User/User.type';
import { updateUserAction } from '../../modules/User/UserSlice';
import Input from '../Input';
import { IProps } from './Modal.types';
import Styles from './ModalStyle.module.css'

const Modal = (props: IProps) => {

  const { title, children, onClose, user } = props;
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { createUserFormStatus, updateUserFormStatus } = useAppSelector((state: RootState) => state.user)

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const data: IUserForm = { name, email };
    const dirtyFormData: IUpdateUserActionProps = { id: user?.id, data } 
    dispatch(updateUserAction(dirtyFormData))
  }

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email)
    }
  }, [])
  
  return (
    <div id="myModal" className={Styles.modal}>
        <div className={Styles["modal-content"]}>
            <span className={Styles.close} onClick={onClose}>&times;</span>
            <h2>{title}</h2>
            {children}
            {user && (
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
            <input
              type="submit"
              value={user ? "Update" : "Create"}
              disabled={
                createUserFormStatus === ApiStatus.loading ||
                updateUserFormStatus === ApiStatus.loading
              }
            />
          </div>
        </form>
        )}
        </div>
    </div>
  )
}

export default Modal