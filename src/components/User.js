import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom'
import users from '../../data/users.json'

const User = () => {
    const {id} = useParams()
    const [user, setUser] = useState({})

    useEffect(() => {
        setUser(users.find(item => item.id === Number(id)))
    }, [id])
    
    //console.log(user)

    return (
        <div>
            <h2>User Details</h2>
            <p><b>Name:</b> {user.name?.firstname} {user.name?.lastname}</p>
            <p><b>Username:</b> {user.username}</p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Phone:</b> {user.phone}</p>
        </div>
    )
}

export default User