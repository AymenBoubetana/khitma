import "./Nineth.scss"

const Nineth = (props) => {
  const handclick=()=>{
    props.setPage(3);
  }
  return (
    <div className="Nineth">
      <div className="nav">
        <h3>ختمة</h3>
        <img src="Ellipse.png" alt="" />
      </div>
      <div className="buttons">
        <button className="bt1 " onClick={()=>{props.setPage(4)}} >أدعية</button>
        <button className="bt1 active " onClick={()=>{props.setPage(6)}}>تواصل معنا</button>
        <button className="bt1 " onClick={()=>{props.setPage(3)}} >سورة</button>
      </div> 
      <div className="elems">
        <div className="elem">
          <h2>قيم تطبيق ختمة</h2>
          <a href=""><img src="like.png" alt="" /></a>
      
        </div>
        <div className="elem">
          <h2>نشر رابط الختمة</h2>
          <a href=""><img src="share.png" alt="" /></a>
        </div>
      </div>
      <h1>نشر الرابط مع اصدقائك للانضمام الى الختمة</h1>
      <div className="icons">
        <div className="icon">
          <a href=""><img src="face.png" alt="" /></a>
        </div>
        <div className="icon">
          <a href=""><img src="insta.png" alt="" /></a>
        </div>
        <div className="icon">
          <a href=""><img src="youtu.png" alt="" /></a>
        </div>
        <div className="icon">
          <a href=""><img src="twitter.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Nineth