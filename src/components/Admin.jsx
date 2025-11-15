import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Admin() {
  const [mydata, setmydata] = useState([])
  const token = localStorage.getItem("token")

  const myfunc = async () => {
    const data = await axios.get("http://localhost:5600/api/v1/getuser", {
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    })
    console.log(data.data.data);
    setmydata(data.data.data)

  }

  useEffect(() => {
    myfunc()
  }, [])


  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>

        {
          mydata.map((items)=>{
            return(
              <tr>
                <td>{items.name}</td>
                <td>{items.email}</td>
              </tr>
            )
          })
        }

      </table>
    </div>
  )
}

export default Admin