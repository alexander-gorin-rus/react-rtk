import React, { ChangeEvent } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { IUserForm } from '../../modules/User/User.type';
import { createUserAction } from '../../modules/User/UserSlice';
import Input from '../Input';
import Styles from './ModalStyle.module.css'

interface IProps {
    title: string;
    children: JSX.Element;
    onClose: () => void;
    user?: IUserForm;
    userId?: number | null;
}

const Modal = (props: IProps) => {

  const { title, children, onClose, user, userId } = props;
  const { name, email } = user ?? { name: '', email: '' };
  const dispatch = useAppDispatch();

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const data: IUserForm = { name, email, id: userId };
    dispatch(createUserAction(data))
  }
  console.log('===USER=====', user);
  
  return (
    <div id="myModal" className={Styles.modal}>
        <div className={Styles["modal-content"]}>
            <span className={Styles.close} onClick={onClose}>&times;</span>
            <h2>{title}</h2>
            {children}
        </div>
        {user && (
          <form className={Styles.form} onSubmit={onSubmitForm}>
          <Input 
            label="Name"
            type="text"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              //setName(e.target.value)
            }}
          />
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              //setEmail(e.target.value)
            }}
          />
          <div className={Styles["btn-wrapper"]}>
            <input type="submit" value="Create" />
          </div>
        </form>
        )}
    </div>
  )
}

export default Modal