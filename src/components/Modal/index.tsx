import React from 'react';
import Styles from './ModalStyle.module.css'

interface IProps {
    title: string;
    children: JSX.Element;
    onClose: () => void
}

const Modal = (props: IProps) => {

    const { title, children, onClose } = props;
  return (
    <div id="myModal" className={Styles["modal"]}>
        <div className={Styles["modal-content"]}>
            <span className={Styles.close} onClick={onClose}>&times;</span>
            <h2>{title}</h2>
            {children}
        </div>
    </div>
  )
}

export default Modal