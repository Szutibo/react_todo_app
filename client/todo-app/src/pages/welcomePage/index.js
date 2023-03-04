import React, { useState, useEffect } from 'react';
import { getUsers } from '../../components/fetch';
import { useNavigate } from 'react-router-dom';
import UserWidget from '../../components/userWidget';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { DropdownMenu } from '../../components/dropdown';
import './style.css';

const WelcomePage = ({ setSelectedUser, selectedUser }) => {
    const [usersList, setUsersList] = useState([]);
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getUsers(setUsersList);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className='welcomePageWrapper'>
            <div className='welcomePageHeader'>
                <h1>Welcome here!</h1>
                <h2>Please select a user, or create one!</h2>
            </div>
            <div className='userWidgets'>
                {
                    usersList
                    && usersList.map((user) => (
                        <div
                            key={user.id}
                            onClick={() => {
                                setSelectedUser({ id: user.id, username: user.username });
                                navigate(`/todos/${user.id}`);
                            }}
                        >
                            <UserWidget username={user.username} id={user.id} />
                        </div>
                    ))
                }
                <div className='newUserWrapper'>
                    {
                        !expanded
                        && <div className='newUserIcon' onClick={() => setExpanded(true)}>
                            <AiOutlinePlusCircle />
                        </div>
                    }
                    {
                        expanded
                        && <DropdownMenu
                            setExpanded={setExpanded}
                            setSelectedUser={setSelectedUser}
                            selectedUser={selectedUser}
                        />
                    }
                </div>
            </div>
            <div className='quoteBox'>
                <div className='quoteWrapper'>
                    <p className='quote'>"<span>To do</span>, or not <span>to do</span>, that is the question..."</p>
                    <p className='quoteAuthor'>/ Unknown author /</p>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage;