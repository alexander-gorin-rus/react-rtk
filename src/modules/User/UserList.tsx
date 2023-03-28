import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { RootState } from '../../app/store'
import { ApiStatus, IUser } from './User.type';

const UserList = () => {
  const {list, listStatus} = useAppSelector((state: RootState) => state.user);

  return (
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
                    <td>Action</td>
                </tr>
            ))}
            
    </table>
  )
}

export default UserList