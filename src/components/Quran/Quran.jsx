
import "./Quran.scss"
import { useEffect, useState } from "react";
import swal from 'sweetalert';
const Quran = (props) => {
  const handleclick=()=>{
    props.setPage(3);

  } 
  const [tex,setTex]=useState("");
  const [In,setind] = useState(0);
  useEffect(() => {
    fetch(props.data)
      .then(res => res.json())
      .then(d => {
        let verses = d.data['ayahs'];
        let Audioarray = [];
        let Textarray = [];
        verses.forEach(verse => {
          Audioarray.push(verse.audio);
          Textarray.push(verse.text);
        });

        console.log(Audioarray);
        console.log(Textarray);
        let ayahindex=0;
        let isplaying=true;
      
        if (Textarray.length > 0) {
          setTex(Textarray[0]);
        } else {
          console.log("Textarray is empty");
        }

        const audio=document.getElementById("audo");
        const left=document.getElementById("left");
        const right=document.getElementById("right");
        const center=document.getElementById("center");
        if (audio) {
          audio.src = Audioarray[0];

          const changeAyyah = (index) => {
            if (index < Textarray.length) {
              setTex(Textarray[index]);
              audio.src = Audioarray[index];
            }else{
              swal({
                title: "تممت السورة!",
                text: "حافض على وردك اليومي",
                icon: "success",
              });
            }
          };

          audio.addEventListener('ended', () => {
            const prev=In+1;
            setind(prev);
            console.log(In);
            ayahindex++;
            console.log(ayahindex);
            changeAyyah(ayahindex);
          });
          left.addEventListener('click',()=>{
            ayahindex ===0 ? ayahindex=Audioarray.length-1:ayahindex--;
            changeAyyah(ayahindex);
          })
          right.addEventListener('click',()=>{
            ayahindex<Audioarray.length-1 ?ayahindex++:ayahindex=0;

            changeAyyah(ayahindex);
            if(ayahindex===Textarray.length){
              swal({
                title: "أتممت السورة!",
                text: "حافض على وردك اليومي",
                
                icon: "success",
              });
            }
          });
        
        center.addEventListener('click',()=>{
           if(isplaying){
            audio.pause();
            center.innerHTML=`<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/000000/play--v1.png" alt="play--v1"/>`;
            isplaying=false;
           }else{
            audio.play();
            center.innerHTML=`<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/000000/pause--v1.png" alt="pause--v1"/>`;
            isplaying=true;
           }
        })
        } else {
          console.log("Audio element not found");
        }

      });

    // Cleanup function (removing event listener, etc.) can be added if needed

  }, []);
  return (
    <div className='Quran'>
    <div className="head">
      <p id="para">{tex}</p>
      <audio controls id="audo" autoPlay>
            <source src="your-audio-file-path.mp3" type="audio/mpeg" />
      </audio>
    <div className="icons">
      {/* <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/000000/pause--v1.png" alt="pause--v1"/> */}
      <button id="left"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/back.png" alt="back"/></button>
      <button id="center" ><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/000000/pause--v1.png" alt="pause--v1"/></button>
      <button id="right"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/forward--v1.png" alt="forward--v1"/></button>
    </div>
    </div>
    <div className="button">
      <button onClick={handleclick}>
      الرجوع إلى قائمة السور
      </button>
    </div>
  </div>
  
  )
}

export default Quran