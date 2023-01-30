import './App.css';
import MainComponent from './components/MainComponent/MainComponent';
// components
import Navbar from './components/Navbar/Navbar';
import SubNav from './components/subNav/SubNav';
import Footer from './components/Footer/Footer';
import { Routes,Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Cart from './components/Cart/Cart';


function App() {
  return (<>
    <Navbar/>
    <SubNav/>
    <Routes>
      <Route path='/' element={<MainComponent/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/getproductone/id' element={<Cart/>}/>
    </Routes>
    <Footer />
    </>);
}

export default App;
