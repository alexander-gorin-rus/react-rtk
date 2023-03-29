import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { RootState } from '../../app/store'
import Modal from '../../components/Modal';
import { ApiStatus, IUser } from './User.type';
import { getUsersListAction } from './UserSlice';

const UserList = () => {
  const {list, listStatus} = useAppSelector((state: RootState) => state.user);

  const [userDataToView, setUserDataToView] = useState<IUser | null>(null);
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
                                <input type="button" value="Edit" onClick={() => setUserDataToView(user)}/>
                                <input type="button" value="View" />
                                <input type="button" value="Delete" />
                            </div>
                        </td>
                    </tr>
                ))}
                
        </table>
        {userDataToView && (
            <Modal title="User Details" onClose={() => {setUserDataToView(null)}}>
                <div>
                    this children
                </div>
            </Modal>
        )}
        
    </>
  )
}

export default UserList