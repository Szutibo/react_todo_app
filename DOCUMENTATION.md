# Welcome to my to do app!

It is a basic project which consumes a Node.js backend, a MySQL database and a React frontend.
The project uses every CRUD method.

## Getting started

1. Open a new terminal and cd to react_todo_app\server\createDB
2. Type node createDB.js and hit Enter
3. This will create the database and fill it with dummy data
4. If anything goes wrong please check the connection data at react_todo_app\server\createDB.js inside connection
5. Then cd to react_todo_app\server\api
6. Type node index.js and hit Enter
7. Open a new terminal and cd to react_todo_app\client\todo-app
8. Type in npm install and hit Enter
9. After the installation type npm start and hit Enter
10. Enjoy!

## Some basic info about the app

At the welcome page you can choose a user or create one.
After choosing or creating one, the page will navigate to the todos page where a user's task are shown.
You can create new tasks, sign them complete or not complete, modify them and of course delete them.
The app has basic validation which should prevent user errors.