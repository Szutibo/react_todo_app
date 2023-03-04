import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RxCrossCircled } from 'react-icons/rx';
import { createUser } from '../fetch';
import './style.css';

export function DropdownMenu({ setExpanded, setSelectedUser, selectedUser, errors, createButtonDisabled }) {
    const navigate = useNavigate();

    return (
        <div className='dropdown'>
            <div className='dropdownHeader'>
                <label>Provide a username:</label>
                <div className='exitButton' onClick={() => setExpanded(false)}>
                    <RxCrossCircled />
                </div>
            </div>
            <div className='inputBox'>
                <input
                    type="text"
                    onChange={(e) => setSelectedUser({ username: e.target.value })}
                    className={errors.name && 'input-error'}
                />
                <label className='error-container'>{errors.name}</label>
            </div>
            <button
                disabled={createButtonDisabled}
                onClick={() => {
                    createUser(selectedUser.username, setSelectedUser, navigate);
                    setExpanded(false);
                }}
            >Create user!</button>
        </div>
    )
};