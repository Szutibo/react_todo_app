import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import WelcomePage from './pages/welcomePage/index';
import TodosPage from './pages/todosPage/index';
import ErrorPage from './pages/errorPage/index';
import { useState } from 'react';

function App() {
  const [selectedUser, setSelectedUser] = useState({
    username: '',
    id: null,
  });

  return (
    <div className="App">
      <BrowserRouter >
        <Routes >
          <Route path='/' element={<WelcomePage selectedUser={selectedUser} setSelectedUser={setSelectedUser} />} />
          <Route path='/home' element={<WelcomePage selectedUser={selectedUser} setSelectedUser={setSelectedUser} />} />
          <Route path='/todos/:id' element={<TodosPage selectedUser={selectedUser} setSelectedUser={setSelectedUser} />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
