import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import TodoWidget from '../../components/todoWidget';
import NewTaskWidget from '../../components/newTaskWidget';
import { getUserById, getTasks, updateTask } from '../../components/fetch';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import './style.css';
import { useParams } from 'react-router-dom';

const TodosPage = ({ selectedUser, setSelectedUser }) => {
    const { id } = useParams();
    const [tasks, setTasks] = useState([]);
    const [open, setOpen] = useState(false);
    const [newTask, setNewTask] = useState({
        completed: false,
        userId: id,
    });
    const [modifiedTask, setModifiedTask] = useState({});
    const todosDone = tasks.filter((task) => task.completed !== 0).length;
    const activeTodos = tasks.filter((task) => task.completed !== 1).length;

    const toggleCompletedValues = () => {
        setTasks(
            tasks.map(oneTask => {
                if (oneTask.completed === 1) {
                    return {
                        ...oneTask,
                        completed: true
                    };
                } else {
                    return {
                        ...oneTask,
                        completed: false
                    };
                }
            })
        );
    };

    useEffect(() => {
        getUserById(id, setSelectedUser);
        getTasks(id, setTasks);
        toggleCompletedValues();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className='todosPageWrapper'>
            <Navbar selectedUser={selectedUser} todosDone={todosDone} activeTodos={activeTodos} />
            <div className='todosWrapper'>
                <div className='todosContainer'>
                    {
                        tasks && tasks.map((task) => (
                            <div key={task.id}>
                                <TodoWidget
                                    task={task}
                                    setTasks={setTasks}
                                    tasks={tasks}
                                    modifiedTask={modifiedTask}
                                    setModifiedTask={setModifiedTask}
                                    toggleCompletedValues={toggleCompletedValues}
                                //toggleCompletedStatus={toggleCompletedStatus}
                                />
                            </div>
                        ))
                    }
                </div>
                {
                    !open
                    && <div className='newTaskWrapper' onClick={() => setOpen(true)}>
                        <AiOutlinePlusCircle />
                    </div>
                }
                {
                    open
                    && <div className='newTaskBox'>
                        <NewTaskWidget
                            setTasks={setTasks}
                            tasks={tasks}
                            setNewTask={setNewTask}
                            newTask={newTask}
                            setOpen={setOpen}
                            open={open}
                            id={id}
                        />
                    </div>
                }
            </div>
        </div>
    )
}

export default TodosPage;