import React, { useState, useEffect, useRef } from 'react';
import './Fourth.scss';

const Fourth = (props) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('https://api.alquran.cloud/v1/surah')
      .then(res => res.json())
      .then(data => {
        
        const newItems = [];
        for (let i = 0; i < 114; i++) {
          newItems.push(data.data[i].name);
        }
        setItems(newItems);
      });
  }, []);

  function handleClick(key) {
    return async (e) => {
      e.preventDefault();
      console.log(key + 1);
      console.log("Before fetching:", props.data);
      await props.Fetch(`https://api.alquran.cloud/v1/surah/${key+1}/ar.alafasy`);
       console.log("after fetching:", props.data); // Assuming this function updates props.data asynchronously
       console.log(props.data);
       props.setPage(5); // This should log the updated value of props.data
    };
  }
  
  
 // Seul props est utilisé comme dépendance
  
  


  return (
    <div className='Fourth'>
      <div className="nav">
        <h3>ختمة</h3>
        <img src="Ellipse.png" alt="" />
      </div>
      <div className="buttons">
        <button className="bt1" onClick={() => { props.setPage(4) }}>أدعية</button>
        <button className="bt1" onClick={() => { props.setPage(6) }}>تواصل معنا</button>
        <button className="bt1 active" onClick={() => { props.setPage(3) }}>سورة</button>
      </div>
      <div className="numbers" id='click'>
        {items.map((item, key) => (
          <div className="item" key={key} value={item} onClick={handleClick(key)}><a href="" >{item}</a></div>
        ))}
      </div>
    </div>
  )
}

export default Fourth;
