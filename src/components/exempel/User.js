import {useState} from 'react'


export default function User({user}){

    const [count, setCount]=useState(0);
    console.log(user)

    console.log(user.name)
    return (
        <li>
            <p>{user.name}</p>
            {user.email &&
            <p>Email: {user.email}</p>}
            
        </li>

    )
}