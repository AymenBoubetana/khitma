import React from 'react'; // Importation de React nécessaire pour les composants React
import './Logyass.css'; // Importation de votre fichier CSS
import { useState } from 'react';
import axios from 'axios';
const Logyass = (props) => {
  const [data,setdata]=useState({
    firstname:"",
    lastname:"",
    country:"",
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
    firstname:data.firstname,
    lastname:data.lastname,
    country:data.country,
    email:data.email,
    password:data.password
  };
 console.log(sentdata);
 axios.post("http://localhost/register.php",sentdata).then((result)=>{
  if(result.data.Status==="Invalid"){
    alert("Invalid user");

  }else{
     props.setPage(2);
  }
 })
 }


  return (
    <div className='Third'>
      <div className="nav">
        <h3>ختمة</h3>
        <img src="Ellipse.png" alt="" />
      </div>
      <div className='titre'>
        <h1 className='titre1'> تسجيل عبر</h1>
        <hr id='hr1' />
      </div>

      <form className='labelparent' onSubmit={handlesubmit}>
      <div className="form-row">
        <label className='zz'>الاسم الاول</label>
        <label className=''>الاسم الاخير</label>
      </div>
      
      <div className="form-row2">
        <input className='input' type="text" placeholder="الاسم الاول" name="firstname" value={data.username} onChange={handlechange} />
        <input className='input' type="text" placeholder="الاسم الاخير" name="lastname" value={data.lastname} onChange={handlechange} />
      </div>
    
      <div className="form-row3">
        <label className=''>الدولة</label>
        <label className=''>البريد الالكتروني</label>
      </div>
    
      <div className="form-row3-1">
        <input className='input' type="text" placeholder="الدولة"  name="country" value={data.country} onChange={handlechange} />
        <input className='input' name='email' type="email" placeholder="البريد الالكتروني" value={data.email} onChange={handlechange} />
      </div>
    
      <div className="form-row3-2">
        <label className=''>كلمة المرور</label>
        <label className=''>اعادة كلمة المرور</label>
      </div>
    
      <div className="form-row3-3">
        <input className='input' name='password' type="password" placeholder="كلمة المرور"  value={data.password} onChange={handlechange} />
        <input className='input' type="password" placeholder="اعادة كلمة المرور" />
      </div>
      <div className='buttondiv'>
    <button className='button'>تسجيل</button></div>
    </form>
    
    </div>
  );
}

export default Logyass;