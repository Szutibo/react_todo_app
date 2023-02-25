const mysql = require('mysql2');
const data = require('./data');

// Create connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
});

// Create TodoDB database
connection.query('CREATE DATABASE IF NOT EXISTS TodoDB', (err) => {
  if (err) throw err;
  console.log('TodoDB database created successfully');
});

// Create Users table
connection.query(
  `CREATE TABLE IF NOT EXISTS TodoDB.Users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
  )`,
  (err) => {
    if (err) throw err;
    console.log('Users table created successfully');
  }
);

// Create Tasks table
connection.query(
  `CREATE TABLE IF NOT EXISTS TodoDB.Tasks (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT false,
    due_date DATE NOT NULL,
    userId INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES Users(id)
  )`,
  (err) => {
    if (err) throw err;
    console.log('Tasks table created successfully');
  }
);

// Create users and tasks
for (let i = 0; i < data.length; i++) {
  connection.query(`INSERT INTO TodoDB.Users (username) VALUES ("${data[i].userName}")`, (error, results) => {
    if (error) {
      console.error('Error inserting new user:', error);
      return;
    }
  
    console.log('New user successfully inserted into database!');
    console.log('Inserted user ID:', results.insertId);
    data[i].userId = results.insertId;
  });
  for (let j = 0; j < data[i].tasks.length; j++) {
    connection.query(`INSERT INTO TodoDB.Tasks (title,completed,due_date,userId) VALUES ("${data[i].tasks[j].title}",${data[i].tasks[j].completed},"${data[i].tasks[j].dueDate}",${data[i].userId})`, (error, results) => {
      if (error) {
        console.error('Error inserting new task:', error);
        return;
      }
    
      console.log('New task successfully inserted into database!');
    });
  }
};

// Close connection
connection.end();