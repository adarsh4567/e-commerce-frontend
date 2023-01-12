import './App.css';
import MainComponent from './components/MainComponent/MainComponent';
// components
import Navbar from './components/Navbar/Navbar';
import SubNav from './components/subNav/SubNav';


function App() {
  return (<>
    <Navbar/>
    <SubNav/>
    <MainComponent/>
    </>);
}

export default App;
