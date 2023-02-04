import './App.css';
import MainComponent from './components/MainComponent/MainComponent';
// components
import Footer from './components/Footer/Footer';
import { Routes,Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Cart from './components/Cart/Cart';
import Buynow from './components/BuyNow/Buynow';
import { useEffect, useState } from 'react';
import { Loader } from './components/Loader/Loader';



function App() {
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
     setTimeout(() => {
       setLoading(false)
     }, 5500);
  },[])
  return (<>
    {!loading ? (<>
    <Routes>
      <Route path='/' element={<MainComponent/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/getproductsone/:id' element={<Cart/>}/>
      <Route path='/buynow' element={<Buynow/>}/>
    </Routes>
    <Footer />
    </>):(<Loader/>)
    }
    </>);
}

export default App;
