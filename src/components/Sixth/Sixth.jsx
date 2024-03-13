import "./Sixth.scss";

const Sixth = (props) => {
  const items=[1,2,3,4,5,6,7];
  
  return (
    <div className='Sixth'>
      <div className="nav">
        <h3>ختمة</h3>
        <img src="Ellipse.png" alt="" />
      </div>
      <div className="buttons">
      <button className="bt1 active" onClick={()=>{props.setPage(4)}} >أدعية</button>
        <button className="bt1" onClick={()=>{props.setPage(6)}}>تواصل معنا</button>
        <button className="bt1 " onClick={()=>{props.setPage(3)}} >سورة</button>
      </div>
      <div className="images">
      {items.map((item)=>{
        return <img src={`${item}.png`} key={item}/>
      })}
      </div>
      
    </div>
  )
}

export default Sixth