import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UserList from "./components/UserList";
import AddUsers from './components/AddUsers';
import EditUsers from './components/EditUsers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/add' element={<AddUsers />} />
        <Route path='/edit/:id' element={<EditUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
