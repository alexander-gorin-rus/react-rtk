import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import {
  ApiStatus,
  IChequeForm,
  IPositions,
} from "../../modules/Cheques/Cheque.type";
import {
  createChequeAction,
  updateChequeAction,
} from "../../modules/Cheques/ChequeSlice";
import Input from "../Input";
import SelectInput from "../Select";
import { toastError } from "../ToastifyConfig";
import { IProps } from "./Modal.types";
import Styles from "./ModalStyle.module.css";

const Modal = (props: IProps) => {
  const { onClose, cheque, onRerenderClick } = props;
  const [dateReg, setDateReg] = useState(new Date());
  const [kioskName, setKioskame] = useState("");
  const [chequeType, setChequeType] = useState<any>();
  const [pays, setPays] = useState<number | any>();
  const [sum, setSum] = useState<number>();
  const [positions, setPositions] = useState<IPositions[]>();
  const [success, setSuccess] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { createChequeFormStatus, updateChequeFormStatus } = useAppSelector(
    (state: RootState) => state.cheque
  );

  const chequeData: IChequeForm = {
    dateReg,
    kioskName,
    chequeType,
    pays,
    sum,
    positions,
  };

  const validateForm = (kioskName: string, sum?: number): boolean => {
    if (!kioskName || !sum) {
      return false;
    }

    if (cheque && !cheque.id) {
      return false;
    }

    return true;
  };

  const isFormValid = validateForm(kioskName, sum);

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) {
      toastError("Поля должны быть заполнены");
      return;
    }

    if (cheque) {
      const chequeUpdateFormData = { id: cheque.id, chequeData };
      dispatch(updateChequeAction(chequeUpdateFormData));
      setDateReg(new Date());
    } else {
      dispatch(createChequeAction(chequeData));
    }
    setSuccess(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setChequeType(event.target.value);
  };

  useEffect(() => {
    if (cheque) {
      setKioskame(cheque.kioskName);
      setChequeType(cheque.chequeType);
      setSum(cheque.sum);
    }
  }, [cheque]);

  const handleClose = () => {
    onRerenderClick();
    onClose();
  };

  if (success) {
    setTimeout(() => {
      onRerenderClick();
      onClose();
    }, 2000);
  }

  return (
    <div id="myModal" className={Styles.modal}>
      <div className={Styles["modal-content"]}>
        <span className={Styles.close} onClick={handleClose}>
          &times;
        </span>
        {cheque ? <h2>Изменить чек</h2> : <h2>Создать чек</h2>}
        <form className={Styles.form} onSubmit={onSubmitForm}>
        {JSON.stringify(cheque?.pays)}
          <Input
            label="Название киоска"
            type="text"
            value={kioskName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setKioskame(e.target.value);
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
          <Input
            label="Сумма"
            type="number"
            value={pays}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const value = parseFloat(e.target.value);
              setPays(value);
            }}
          />
          <Input
            label="Сумма"
            type="number"
            value={sum?.toString() ?? ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const value = parseFloat(e.target.value);
              setSum(value);
            }}
          />
          <div className={Styles["btn-wrapper"]}>
            <input
              type="submit"
              value={cheque ? "Изменить чек" : "Создать чек"}
              disabled={
                createChequeFormStatus === ApiStatus.loading ||
                updateChequeFormStatus === ApiStatus.loading
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
