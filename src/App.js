import './App.css';
import MainComponent from './components/MainComponent/MainComponent';
// components
import Navbar from './components/Navbar/Navbar';
import SubNav from './components/subNav/SubNav';
import Footer from './components/Footer/Footer';
import { Routes,Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import { Loader } from './components/Loader/Loader';
import { useEffect, useState } from 'react';


function App() {
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
     setTimeout(() => {
       setLoading(false)
     }, 5500);
  },[])
  return (<>
    {!loading ? (<>
      <Navbar/>
    <SubNav/>
    <Routes>
      <Route path='/' element={<MainComponent/>}/>
      <Route path='/login' element={<Auth/>}/>
    </Routes>
    <Footer />
    </>):(<Loader/>)
    }
    </>);
}

export default App;
