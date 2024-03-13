import "./Seventh.scss"

const Seventh = () => {
  return (
    <div className="Seventh">
        <div className="nav">
        <h3>ختمة</h3>
        <img src="Ellipse.png" alt="" />
      </div>
      <h2>تفاصيل الختمة</h2>
      <div className="inputs">
        <input type="text" placeholder="عنوان الختمة  *"/>
        <input type="text" placeholder="اسمك *" />
        <input type="text" placeholder="نوع المجموعة" />
      </div>
      <div className="inputsmiddle">
      <input type="text" className="inpu1" placeholder="توزيع صفحات"/>
      <input type="text" className="inpu2" placeholder="توزيع اجزاء" />
      </div>
      <div className="inputlast">
      
        <input type="text" placeholder="انشاء الختمة الجماعية" />
      </div>
    </div>
  )
}

export default Seventh