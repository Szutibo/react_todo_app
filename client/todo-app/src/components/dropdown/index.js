import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RxCrossCircled } from 'react-icons/rx';
import { createUser } from '../fetch';
import './style.css';

export function DropdownMenu({ setExpanded, setSelectedUser, selectedUser }) {
    const navigate = useNavigate();

    return (
        <div className='dropdown'>
            <div className='dropdownHeader'>
                <label>Provide a username:</label>
                <div className='exitButton' onClick={() => setExpanded(false)}>
                    <RxCrossCircled />
                </div>
            </div>
            <input type="text" onChange={(e) => setSelectedUser({ username: e.target.value })} />
            <button
                onClick={() => {
                    createUser(selectedUser.username, setSelectedUser, navigate);
                    setExpanded(false);
                }}
            >Create user!</button>
        </div>
    )
};