import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { ApiStatus, ICheque } from './Cheque.type';
import ChequeDate from './chequeItems/ChequeDate';
import ChequeGoods from './chequeItems/ChequeGoods';
import ChequeKiosk from './chequeItems/ChequeKiosk';
import ChequePays from './chequeItems/ChequePays';
import ChequeQuantity from './chequeItems/ChequeQuantity';
import ChequeStatus from './chequeItems/ChequeStatus';
import ChequeSum from './chequeItems/ChequeSum';
import ChequeType from './chequeItems/ChequeTypes';
import { getChequesListAction } from './ChequeSlice';
import Styles from './ChequeStyle.module.css'

const ChequesList = () => {
    const {list, listStatus} = useAppSelector((state: RootState) => state.cheque);
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getChequesListAction())
      }, [])
  return (
    <table>
            <tr>
                <th className='chequesHeader'>Дата покупки</th>
                <th className='chequesHeader'>Киоск</th>
                <th className='chequesHeader'>Тип</th>
                <th className='chequesHeader'>Статус оплаты</th>
                <th className='chequesHeader'>Оплата</th>
                <th className='chequesHeader'>Сумма</th>
                <th className='chequesHeader'>Кол-во товара</th>
                <th className='chequesHeader'>Товары</th>
                <th>Действия</th>
            </tr>
            {listStatus === ApiStatus.loading && <tbody>Идет загрузка чеков</tbody>}
            {listStatus === ApiStatus.error && <tbody>Ошибка загрузки чеков</tbody>}
            {listStatus === ApiStatus.ideal && list.map((cheque: ICheque, index: number) => (
                    <tr key={cheque.id}>
                        <td><ChequeDate cheque={cheque} /></td>
                        <td><ChequeKiosk cheque={cheque} /></td>
                        <td><ChequeType cheque={cheque} /></td>
                        <td><ChequeStatus cheque={cheque} /></td>
                        <td><ChequePays cheque={cheque} /></td>
                        <td><ChequeSum cheque={cheque} /></td>
                        <td><ChequeQuantity cheque={cheque} /></td>
                        <td><ChequeGoods cheque={cheque} /></td>
                        <td>
                            <div className={Styles.chequeItem}>
                                <input
                                    type="button"
                                    value="Детали"
                                    //onClick={() => setUserDataToView(user)}
                                />
                                <input
                                    type="button"
                                    value="Редактировать"
                                    // onClick={() => {
                                    //     setShowEditModal(true)
                                    //     setEditUser(user)
                                    // }}
                                />
                                <input
                                    type="button"
                                    value="Удалить"
                                    //onClick={() => {dispatch(deleteUserAction(user.id))}}
                                />
                            </div>
                            {/* {showEditModal && (
                                <Modal
                                    title="Edit User"
                                    onClose={() => {setShowEditModal(false)}}
                                    user={editUser}
                                >
                                <div>
                                    <span>Edit</span>
                                    <hr />
                                    <span onClick={() => {
                                        setShowEditModal(false)
                                    }}>Yes</span>
                                    <span onClick={() => {setShowEditModal(false)}}>No</span>
                                </div>
                            </Modal>
                            )} */}
                            {/* {showDeleteModal && (
                                <Modal title="User Details" onClose={() => {setEditUser(null)}}>
                                <div>
                                    <span>{`Do you really want to delete this user ${editUser?.name}? with id ${editUser?.id}`}</span>
                                    <br />
                                    <span onClick={() => {
                                        setShowDeleteModal(false)
                                    }}>Yes</span>
                                    <span onClick={() => {setShowDeleteModal(false)}}>No</span>
                                </div>
                            </Modal>
                            )} */}
                        </td>
                    </tr>
                    
                ))}
                
        </table>
  )
}

export default ChequesList