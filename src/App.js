import { useState } from 'react';
import './App.css';
import Eighth from './components/Eighth/Eighth';
import Nineth from './components/Nineth/Nineth';
import Seventh from './components/Seventh/Seventh';
import Sixth from './components/Sixth/Sixth';
import Fifth from './components/fifthPage/Fifth';
import Second from './components/Second/Second';
import Fourth from './components/Fourth/Fourth';
import First from './components/First/First';
import Quran from './components/Quran/Quran';
import "./components/global.scss";
import Register from './components/Register/Registration';
import Registration from './components/Register/Registration';
import Login from './components/Login/Login';
import Logyass from './components/LogYass/Logyass';


function App() {
  const [page,setPage]=useState(2);
  const [Fetch,setFetch]=useState(null);
  const handlePageChange = (newPage) => {
    setPage(newPage);
};
  const handlecontent = (content) => {
    setFetch(content);
};
  const getPageComponent = () => {
    switch (page) {
      case 2:
        return <Second setPage={handlePageChange}/> ;
      case 1:
        return <Logyass setPage={handlePageChange} />;
      case 3:
        return <Fourth setPage={handlePageChange} Fetch={handlecontent} data={Fetch} />;
      case 4:
        return <Eighth setPage={handlePageChange} />;
      case 5:
        return <Quran setPage={handlePageChange} Fetch={handlecontent} data={Fetch}/>;  
      case 6:
        return <Nineth setPage={handlePageChange} />;

      default: return <Eighth/>
    }
  };
  return(
    getPageComponent()
    

  );

}

export default App;
