import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import './style.css';

const Navbar = ({ selectedUser, todosDone, activeTodos }) => {
    const navigate = useNavigate();

    return (
        <div className='navbarWrapper'>
            <div className='userBox'>
                <div className='welcomeBox'>
                    <h3>{selectedUser.username}</h3>
                </div>
                <div className='infoBox'>
                    <div className='completedTodos'>
                        <p>Todos done:</p>
                        <label>{todosDone}</label>
                    </div>
                    <div className='activeTodos'>
                        <p>Active todos:</p>
                        <label>{activeTodos}</label>
                    </div>
                </div>
            </div>
            <div className='logoutBox' onClick={() => navigate('/home')}>
                <BiLogOut />
            </div>
        </div>
    )
}

export default Navbar;