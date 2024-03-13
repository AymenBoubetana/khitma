import "./Second.scss";
import React, { useState } from 'react';
import axios from 'axios';
const Second = (props) => {
  const [data, setData] = useState({
    email: "",
    password: ""
});

const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    const sendData = {
        email: data.email,
        password: data.password
    };

    axios.post("http://localhost/login.php", sendData)
        .then((response) => {
            if (response.data.statut === 'valid') {
                props.setPage(3);
            } else {
                alert("Connexion échouée");
            }
        })
        .catch((error) => {
            console.error("Erreur:", error);
            alert("Une erreur s'est produite lors de la connexion.");
        });
};
const handleclick=(e)=>{
  e.preventDefault();
  props.setPage(1);

}
  return (
    <div className='Second'>
      <div className="nav">
        <h3>ختمة</h3>
        <img src="Ellipse.png" alt="" />
      </div>
      <div className="tasjil">
        <h2>
        تسجيل الدخول
        </h2>
        
      </div>
      <hr />
      
      <div className="tasjil2">
        <h4>
        تسجيل عن طريق
        </h4>
      </div>
      <div className="images">
        <img className="img1" src="apple.png" alt="" />
        <img className="img2" src="google.png" alt="" />
      </div>
      <form onSubmit={handleSubmit}>
      <div className="inputs">
        <div className="inpu1">
          <label htmlFor="">البريد الالكتروني</label>
          <input type="text" name="email" placeholder="البريد الالكتروني"  value={data.email}
                onChange={handleChange}/>
        </div>
        <div className="inpu2">
          <label htmlFor="">كلمة المرور</label>
          <input placeholder="كلمة المرور" name="password" type="password"     value={data.password}
                onChange={handleChange} />
        </div>
      </div>
      <div className="hadra">
        <h4 className="lol"><a href="" onClick={handleclick}>تسجيل حساب جديد</a></h4>
        <h4 className="lil"><a href=""> نسيت كلمة المرور؟</a></h4>
      </div>
      <div className="forget">
      <h4>تذكر كلمة المرور</h4>
        <input type="checkbox" name="" id="" />
        
      </div>
      <div className="btn">
      <button>تسجيل الدخول</button>
      </div>
      </form>
      
    </div>
  )
}

export default Second