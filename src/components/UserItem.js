import React from 'react';
import { useDispatch } from 'react-redux';

const UserItem = ({ name, id }) => {
    const dispatch = useDispatch();

    const handleRemoveUser = () => {
        dispatch({ type: 'removeUser', payload: { id }});
    };

    return (
        <li>{name} <button onClick={handleRemoveUser}>usuń</button></li>
    )
}

export default UserItem;