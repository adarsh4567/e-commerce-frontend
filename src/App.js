import './App.css';
import MainComponent from './components/MainComponent/MainComponent';
// components
import Navbar from './components/Navbar/Navbar';
import SubNav from './components/subNav/SubNav';
import Footer from './components/MainComponent/footer/Footer';


function App() {
  return (<>
    <Navbar/>
    <SubNav/>
    <MainComponent/>
    <Footer />
    </>);
}

export default App;
