import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
function Registration() {
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [password_confirmation, setpassword_confirmation] = useState()

    const navigate=useNavigate()

    const handelsubmit = async (e) => {
        e.preventDefault()
        await axios.post("https://development.codespare.in/public/api/v1/register",{ name, email, password,password_confirmation })
            .then((user) => {
                console.log(user);
                navigate("/login")
                alert("Registration successfully")
            })
    }

    return (
        <div>
            <form action="" onSubmit={handelsubmit}>
                <p>
                    Name:
                    <input type="text" onChange={(e) => setname(e.target.value)} name='name' placeholder='Enter Your Name' />
                </p>
                <p>
                    Email:
                    <input type="email" onChange={(e) => setemail(e.target.value)} name='email' placeholder='Enter Your email' />
                </p>
                <p>
                    Password:
                    <input type="password" onChange={(e) => setpassword(e.target.value)} name='password' placeholder='Enter Your password' />
                </p>
                <p>
                    Password:
                    <input type="password" onChange={(e) => setpassword_confirmation(e.target.value)} name='password_confirmation' placeholder='Enter Your password' />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Registration