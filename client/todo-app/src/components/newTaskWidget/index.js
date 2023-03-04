import React, { useEffect } from 'react';
import { createTask } from '../../components/fetch';
import { RxCrossCircled } from 'react-icons/rx';
import './style.css';

const NewTaskWidget = ({ setNewTask, newTask, setOpen, id, setTasks }) => {
    const currentDate = new Date();
    const properDateFormat = currentDate.toISOString().substring(0, 10);

    useEffect(() => {
        setNewTask({ ...newTask, due_date: properDateFormat });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className='newTaskWidgetWrapper'>
            <p>Please provide a title:</p>
            <div
                className='cancelButton'
                onClick={() => {
                    setOpen(false);
                    setNewTask({ ...newTask, due_date: properDateFormat });
                }}
            >
                <RxCrossCircled />
            </div>
            <input type="text" onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} />
            <input type="date" defaultValue={properDateFormat} onChange={(e) => setNewTask({ ...newTask, due_date: e.target.value })} />
            <div className='buttonContainer'>
                <button onClick={() => {
                    createTask(newTask, setTasks);
                    setOpen(false);
                    setNewTask({ completed: 0, userId: id });
                }}>Add todo!</button>
            </div>
        </div>
    )
}

export default NewTaskWidget;