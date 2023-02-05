import './App.css';
import MainComponent from './components/MainComponent/MainComponent';
// components
import Footer from './components/Footer/Footer';
import { Routes,Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Cart from './components/Cart/Cart';
import Buynow from './components/BuyNow/Buynow';



function App() {
  return (<>
    <Routes>
      <Route path='/' element={<MainComponent/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/getproductsone/:id' element={<Cart/>}/>
      <Route path='/buynow' element={<Buynow/>}/>
    </Routes>
    <Footer />
    </>);
}

export default App;
