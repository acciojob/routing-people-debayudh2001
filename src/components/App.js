
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import { Link } from "react-router-dom/cjs/react-router-dom";
//import users from '../../data/users.json'

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err))
  }, [])

  //console.log(users)

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users && users.map((user, ind) => {
          return <li key={ind} style={{ marginBottom: "15px" }}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
        })}
      </ul>
    </div>
  )
}

export default App
