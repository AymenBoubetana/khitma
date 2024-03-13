// RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm(props) {
     const [data,setdata]=useState({
      username:"",
      email:"",
      password:""

     });
     
     const handlechange=(e)=>{
      setdata({...data,[e.target.name]:e.target.value});
      //console.log(data);

     }
   const handlesubmit=(e)=>{
    e.preventDefault();
    const sentdata={
      username:data.username,
      email:data.email,
      password:data.password
    };
   console.log(sentdata);
   axios.post("http://localhost/register.php",sentdata).
   then((result)=>{
    if(result.data.Status==="Invalid"){
      alert("Invalid user");

    }else{
       props.setPage(2);
    }
   })
   }
  

    return (
        <form onSubmit={handlesubmit}>
            <input name="username" type="text" placeholder="username" value={data.username} onChange={handlechange} />
            <input name="email" type="email" placeholder="Email" value={data.email} onChange={handlechange} />
            <input name="password" type="password" placeholder="Password" value={data.password} onChange={handlechange} />
            <button type="submit">Register</button>
        </form>
    );
}

export default RegistrationForm;
