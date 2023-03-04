const mySql = require('mysql2');
const pool = mySql.createPool({
    user: 'root',
    password: '',
    host: 'localhost',
    database: 'tododb',
    port: '3306'
});
let db = {};

// Get users
db.users = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM users', (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        })
    });
};

// Get one user by name
db.user = (name) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM users WHERE username = ?', [name], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        })
    });
};


// Get one user by ID
db.userById = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM users WHERE id = ?', [id], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        })
    });
};

// Get one user's tasks
db.oneUser = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM tasks WHERE userId = ?', [id], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        })
    });
}

// Create new user
db.createUser = (body) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO users (username) VALUES ("${body.username}")`, (err) => {
            if (err) {
                return reject(err);
            }
            return resolve({ result: 'Creation successful!' });
        })
    });
}

// Create new task
db.createTask = (body) => {
    let values = { title: body.title, completed: body.completed, due_date: body.dueDate, userId: body.userId };

    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO tasks SET ?', values, (err) => {
            if (err) {
                return reject(err);
            }
            return resolve({ result: 'Create successful!' });
        })
    });
}

// Delete task by id
db.deleteTask = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM tasks WHERE id = ?', [id], (err) => {
            if (err) {
                return reject(err);
            }
            return resolve({ result: 'Deletion successful!' });
        })
    });
}

// Complete task
db.completeTask = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('UPDATE tasks SET completed = NOT completed WHERE id = ?', [id], (err) => {
            if (err) {
                return reject(err);
            }
            return resolve({ result: 'Update successful!' });
        })
    });
};

// Update task
db.updateTask = (body) => {
    return new Promise((resolve, reject) => {
        if (body.id != 'undefined') {
            let query = 'UPDATE tasks SET ';
            let values = [];
            if (typeof (body.title) != 'undefined' && body.title.length >= 5 && body.title.length <= 100) {
                query += 'title = ?';
                values.push(body.title);
            }

            if (typeof (body.completed) != 'undefined') {
                if (values.length >= 1) {
                    query += ',';
                }
                query += 'completed = ?'
                values.push(body.completed);
            }

            if (typeof (body.dueDate) != 'undefined') {
                if (values.length >= 1) {
                    query += ',';
                }
                query += 'due_date = ?'
                values.push(body.dueDate);
            }

            query += ' WHERE id = ?';

            values.push(parseInt(body.id));

            pool.query(query, values, (err) => {
                if (err) {
                    return reject(err);
                }
                return resolve({ result: 'Update successful!' });
            });
        }
    })
};

module.exports = db;