
import React from "react";
import './../styles/App.css';
import { Link } from "react-router-dom/cjs/react-router-dom";
import users from '../../data/users.json'

const App = () => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users && users.map((user, ind) => {
          return <li key={ind} style={{marginBottom: "15px"}}><Link to={`/users/${user.id}`}>{user.name.firstname} {user.name.lastname}</Link></li>
        })}
      </ul>
    </div>
  )
}

export default App
