import "./Fifth.scss";
const Fifth = (props) => {

  const items=[];
  for(let i=0;i<30;i++){
    items.push(i);

  }
  return (
    <div className='Fifth'>
      <div className="nav">
        <h3>ختمة</h3>
        <img src="Ellipse.png" alt="" />
      </div>
      <div className="buttons">
        <button className="bt1 " onClick={()=>{props.setPage(4)}} >أدعية</button>
        <button className="bt1 active " onClick={()=>{props.setPage(6)}}>تواصل معنا</button>
        <button className="bt1 " onClick={()=>{props.setPage(3)}} >سورة</button>
      </div>      
      <div className="numbers">
      
      {items.map((item) => {
    return <div className="item" key={item+1}  ><a href=""  >{item+1}</a></div>;
     })}
      </div>
    </div>
  )
}

export default Fifth