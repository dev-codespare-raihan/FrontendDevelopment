import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
function Login() {

  const [email, setemail] = useState()
  const [password, setpassword] = useState()


  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5600/api/v1/login", {
        email,
        password
      });

      console.log(res.data); 

      
      const token = res.data.token || res.data.jasontoken;

      if (token) {
        localStorage.setItem("token", token); 
        alert("Login successful");
        navigate("/admin");
      } else {
        alert("Token not found in response");
      }

    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };


  return (
    <div>
      <form action="" onSubmit={handleSubmit}>

        <p>
          Email:
          <input type="email" onChange={(e) => setemail(e.target.value)} name='email' placeholder='Enter Your email' />
        </p>
        <p>
          Password:
          <input type="password" onChange={(e) => setpassword(e.target.value)} name='password' placeholder='Enter Your password' />
        </p>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login