import React, { useState, useEffect } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { GrEdit } from 'react-icons/gr';
import { RxCrossCircled } from 'react-icons/rx';
import Checkbox from '@mui/material/Checkbox';
import { deleteTaskById, updateTask, completeTask } from '../fetch';
import './style.css';
import { useParams } from 'react-router-dom';
import { green, red } from '@mui/material/colors';

const TodoWidget = ({ task, setTasks, tasks, modifiedTask, setModifiedTask, errors, buttonDisable }) => {
    const { id: userId } = useParams();
    const { title, completed, due_date, id } = task;
    const [extend, setExtend] = useState(false);
    const completedStatus = completed === (false || 0) ? false : true;

    useEffect(() => {
        setModifiedTask({
            title: title,
            completed: completed,
            due_date: due_date,
            id: id
        });
    }, [extend]); // eslint-disable-line react-hooks/exhaustive-deps

    const toggleCompletedStatus = (id) => {
        completeTask(id, setTasks, userId);
        setTasks(
            tasks.map(oneTask => {
                if (oneTask.id === id) {
                    return {
                        ...oneTask,
                        completed: !oneTask.completed
                    }
                } else return oneTask;
            })
        );
    };

    const updatedTask = (values) => {
        updateTask(values);
        setTasks(
            tasks.map(oneTask => {
                if (oneTask.id === values.id) {
                    return {
                        ...oneTask,
                        ...values
                    };
                } else return oneTask;
            })
        );
    }

    return (
        <div className='todoWidgetWrapper'>
            {
                !extend
                && <>
                    <Checkbox
                        checked={completedStatus}
                        onClick={() => {
                            toggleCompletedStatus(id);
                        }}
                        sx={{
                            color: red[800],
                            '&.Mui-checked': {
                                color: green[800],
                            },
                        }}
                    />
                    <div className='todoWidgetInfoBox'>
                        <p className='todoWidgetInfoTitle'>{title}</p>
                        <p className='todoWidgetInfoDate'>{due_date}</p>
                    </div>
                </>
            }
            {
                extend
                && <div className='modifyBox'>
                    <div className='inputWrapper'>
                        <input type="text" placeholder={title} onChange={(e) => setModifiedTask({ ...modifiedTask, title: e.target.value })} />
                        <label className='error-container'>{errors.title}</label>
                    </div>
                    <div className='inputWrapper'>
                        <input type="date" defaultValue={due_date} onChange={(e) => setModifiedTask({ ...modifiedTask, due_date: e.target.value })} />
                        <label className='error-container'>{errors.date}</label>
                    </div>
                    <button
                        disabled={buttonDisable}
                        onClick={() => {
                            setExtend(!extend);
                            updatedTask(modifiedTask);
                        }}
                    >Modify task!</button>
                </div>
            }
            <div className='buttons'>
                <div className='modifyButton' onClick={() => setExtend(!extend)}>
                    {
                        !extend ? <GrEdit /> : <RxCrossCircled />
                    }
                </div>
                <div className='deleteButton' onClick={() => {
                    deleteTaskById(id, setTasks, userId);
                }}>
                    <HiOutlineTrash />
                </div>
            </div>
        </div>
    )
}

export default TodoWidget;