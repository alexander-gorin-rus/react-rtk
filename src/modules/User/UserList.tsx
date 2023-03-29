import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { RootState } from '../../app/store'
import Modal from '../../components/Modal';
import { ApiStatus, IUser } from './User.type';
import { deleteUserAction, getUsersListAction } from './UserSlice';

const UserList = () => {
  const {list, listStatus} = useAppSelector((state: RootState) => state.user);

  const [userDataToView, setUserDataToView] = useState<IUser | null>(null);
  // const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editUser, setEditUser] = useState<IUser | null>(null);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUsersListAction())
  }, [])
  return (
    <>
        <table>
            <tr>
                <th>Sr. No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
            {listStatus === ApiStatus.loading && <tbody>users list is loading</tbody>}
            {listStatus === ApiStatus.error && <tbody>Error in loading users list</tbody>}
            {listStatus === ApiStatus.ideal && list.map((user: IUser, index: number) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <div>
                                <input
                                    type="button"
                                    value="View"
                                    onClick={() => setUserDataToView(user)}
                                />
                                <input
                                    type="button"
                                    value="Edit"
                                    onClick={() => {
                                        setShowEditModal(true)
                                        setEditUser(user)
                                    }}
                                />
                                <input
                                    type="button"
                                    value="Delete"
                                    onClick={() => {dispatch(deleteUserAction(user.id))}}
                                />
                            </div>
                            {showEditModal && (
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
                            )}
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
        {userDataToView && (
            <Modal title="User Details" onClose={() => {setUserDataToView(null)}}>
                <div>
                    <div>
                        <label>Name: {userDataToView.name}</label>
                    </div>
                    <div>
                        <label>Email: {userDataToView.email}</label>
                    </div>
                </div>
            </Modal>
        )}
        
    </>
  )
}

export default UserList