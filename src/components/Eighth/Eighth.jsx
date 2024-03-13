import "./Eighth.scss";

const Eighth = (props) => {
  return (
    <div className="Eighth">
        <div className="nav">
        <h3>ختمة</h3>
        <img src="Ellipse.png" alt="" />
      </div>
      <div className="buttons">
        <button className="bt1 active " onClick={()=>{props.setPage(4)}} >أدعية</button>
        <button className="bt1  " onClick={()=>{props.setPage(6)}}>تواصل معنا</button>
        <button className="bt1 " onClick={()=>{props.setPage(3)}} >سورة</button>
      </div> 
      <h2>ادعية</h2>
      <div className="elements">
        <div className="element">
        «اللهم ارحمني بالقرآن واجعله لي إمامًا ونورًا وهدى ورحمة»
        </div>
        <div className="element">
        «اللهم ذكرني منه ما نسيت وعلمني منه ما جهلت وارزقني تلاوته آناء الليل وأطراف النهار وأجعله لي حجة يا رب العالمين»
        </div>
      </div>
    </div>
  )
}

export default Eighth