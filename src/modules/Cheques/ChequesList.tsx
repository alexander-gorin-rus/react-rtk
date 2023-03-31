import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import Modal from "../../components/Modal";
import { ApiStatus, ICheque } from "./Cheque.type";
import ChequeDate from "./chequeItems/ChequeDate";
import ChequeGoods from "./chequeItems/ChequeGoods";
import ChequeKiosk from "./chequeItems/ChequeKiosk";
import ChequePays from "./chequeItems/ChequePays";
import ChequeQuantity from "./chequeItems/ChequeQuantity";
import ChequeStatus from "./chequeItems/ChequeStatus";
import ChequeSum from "./chequeItems/ChequeSum";
import ChequeType from "./chequeItems/ChequeTypes";
import { deleteChequeAction, getChequesListAction } from "./ChequeSlice";
import Styles from "./ChequeStyle.module.css";

const ChequesList = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editCheque, setEditCheque] = useState<ICheque | null>(null);
  const { list, listStatus } = useAppSelector(
    (state: RootState) => state.cheque
  );
  const [rerendering, setRerendering] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getChequesListAction());
  }, [rerendering]);
  return (
    <>
      <div className={Styles["info-wrapper"]}>
        {listStatus === ApiStatus.loading && <h2 className={Styles.loading}>Идет загрузка чеков</h2>}
        {listStatus === ApiStatus.error && <h2 className={Styles.error}>Ошибка загрузки чеков</h2>}
      </div>
      <table>
        <tr>
          <th className="chequesHeader">Дата покупки</th>
          <th className="chequesHeader">Киоск</th>
          <th className="chequesHeader">Тип</th>
          <th className="chequesHeader">Статус оплаты</th>
          <th className="chequesHeader">Оплата</th>
          <th className="chequesHeader">Сумма</th>
          <th className="chequesHeader">Кол-во товара</th>
          <th className="chequesHeader">Товары</th>
          <th>Действия</th>
        </tr>
        {listStatus === ApiStatus.ideal &&
          list.map((cheque: ICheque) => (
            <tr key={cheque.id}>
              <td>
                <ChequeDate cheque={cheque} />
              </td>
              <td>
                <ChequeKiosk cheque={cheque} />
              </td>
              <td>
                <ChequeType cheque={cheque} />
              </td>
              <td>
                <ChequeStatus cheque={cheque} />
              </td>
              <td>
                <ChequePays cheque={cheque} />
              </td>
              <td>
                <ChequeSum cheque={cheque} />
              </td>
              <td>
                <ChequeQuantity cheque={cheque} />
              </td>
              <td>
                <ChequeGoods cheque={cheque} />
              </td>
              <td>
                <div className={Styles.chequeItem}>
                  <input
                    type="button"
                    value="Создать"
                    onClick={() => {
                      setShowEditModal(true);
                    }}
                  />
                  <input
                    type="button"
                    value="Редактировать"
                    onClick={() => {
                      setShowEditModal(true);
                      setEditCheque(cheque);
                    }}
                  />
                  <input
                    type="button"
                    value="Удалить"
                    onClick={() => {
                      dispatch(deleteChequeAction(cheque.id));
                    }}
                  />
                </div>
                {showEditModal && (
                  <Modal
                    onRerenderClick={() => setRerendering(!rerendering)}
                    onClose={() => {
                      setShowEditModal(false);
                    }}
                    cheque={editCheque}
                  />
                )}
              </td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default ChequesList;
