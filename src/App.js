import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './components/HomePage';

import AddUser from './components/AddUser';
import UserComponent from './components/UserComponent';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
   fetchUsers();
  }, [])


  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/users') 
      setUsers(res.data.data);
    } catch (error) {
      alert('There is an error in fetching users')
      console.log(error)
    }
  }

  return (
    <div>
      <HomePage />
      <div>
      <UserComponent fetchUsers={fetchUsers} users={users} />
      </div>
      <div style={{float: 'right'}}>
      <AddUser fetchUsers={fetchUsers}/>
      </div>
    </div>
  );
}

export default App;
