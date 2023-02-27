const port = 3001;

export const getUsers = async (set) => {
    const everyUser = await fetch(`http://localhost:${port}/api/users`);
    const data = await everyUser.json();
    set(data);
};

export const createUser = async (userData, set) => {
    const createdUser = await fetch(`http://localhost:${port}/api/create/user`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            userName: userData,
        })
    });
    if (createdUser.status === 200) {
        const newUser = await fetch(`http://localhost:${port}/api/user/${userData}`);
        const data = await newUser.json();
        set({ id: data[0].id, userName: data[0].username });
    } else {
        throw new Error(
            `HTTP error occured: status ${createdUser.status}`
        );
    }
};