import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom'
//import users from '../../data/users.json'

const User = () => {
    const { id } = useParams()
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUser(data.find(item => item.id === Number(id))))
            .catch(err => console.log(err))
    }, [id])

    //console.log(user)

    return (
        <div>
            {Object.keys(user).length !== 0 ? (
                <div>
                    <h1>User Details</h1>
                    <p><b>Name:</b> {user.name}</p>
                    <p><b>Username:</b> {user.username}</p>
                    <p><b>Email:</b> {user.email}</p>
                    <p><b>Phone:</b> {user.phone}</p>
                    <p><b>Website:</b> {user.website}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )
            }
        </div>
    )
}

export default User