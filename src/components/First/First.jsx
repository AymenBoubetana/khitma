import './First.css';

const First = () => {
  return (
    <div className='First'>
    <div className="nav">
    <h3>ختمة</h3>
    <img src= "Ellipse.png" alt="" />
  </div>
  <div className='parent'>
    <div className='child1'>
    <h6></h6>
  <h6>تسجيل حساب جديد</h6>
  <h6> تسجيل الدخول</h6>
  </div>
  <div className='child2'>
  <h1>الصفحة الرئيسية</h1>
  <h1>حول الموقع </h1>
  <h1> التعليمات</h1>
  </div>
</div>
<div className='parentImage'>
<div className='imag1'>
<button className='button1'>   ختمة جماعية</button>
</div>
<div className='imag1'>
<button className='button2'>   ختمة فردية</button>
</div>
</div>

</div>

  )
}

export default First