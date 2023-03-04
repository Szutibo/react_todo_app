const port = 3001;

export const getUsers = async (set) => {
    const everyUser = await fetch(`http://localhost:${port}/api/users`);
    const data = await everyUser.json();
    set(data);
};

export const getUserById = async (id, set) => {
    const everyUser = await fetch(`http://localhost:${port}/api/user/id/${id}`);
    const data = await everyUser.json();
    set(...data);
};

export const createUser = async (userData, set, navigation) => {
    const createdUser = await fetch(`http://localhost:${port}/api/create/user`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            username: userData,
        })
    });
    if (createdUser.status === 200) {
        const newUser = await fetch(`http://localhost:${port}/api/user/name/${userData}`);
        const data = await newUser.json();
        set({ id: data[0].id, username: data[0].userName });
        navigation(`/todos/${data[0].id}`);
    } else {
        throw new Error(
            `HTTP error occured: status ${createdUser.status}`
        );
    }
};

export const getTasks = async (id, set) => {
    const tasks = await fetch(`http://localhost:${port}/api/${id}`);
    if (tasks.status === 200) {
        const data = await tasks.json();
        set(data);
    } else {
        throw new Error(
            'Server error!'
        );
    }
};

export const createTask = async (taskData, set) => {
    const { title, completed, due_date, userId } = taskData;

    const createdTask = await fetch(`http://localhost:${port}/api/create/task`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            completed: completed,
            dueDate: due_date,
            userId: userId,
        })
    });
    if (createdTask.status === 200) {
        const data = await createdTask.json();
        getTasks(userId, set);
        return data;
    } else {
        throw new Error(
            `HTTP error occured: status ${createdTask.status}`
        );
    }
};

export const deleteTaskById = (id, set, userId) => {
    fetch(`http://localhost:${port}/api/${id}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: [],
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(
                    `HTTP error occured: status ${response.status}`
                );
            }
            getTasks(userId, set);
            return response;
        });
};

export const completeTask = (id, set, userId) => {
    fetch(`http://localhost:${port}/api/complete/${id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: [],
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(
                    `HTTP error occured: status ${response.status}`
                );
            }
            getTasks(userId, set);
            return response;
        });
};

export const updateTask = async (taskData) => {
    const { title, completed, due_date, id } = taskData;

    const updatedTask = await fetch(`http://localhost:3001/api`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            completed: completed,
            dueDate: due_date,
            id: id,
        }),
    });
    if (updatedTask.status === 200) {
        const data = await updatedTask.json();
        return data;
    } else {
        throw new Error(
            'ID does not exist!'
        );
    }
};