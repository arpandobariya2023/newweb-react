import logo from './logo.svg';
import './App.css';
import './css/style.css';
import Header from './componets/Header';
import Footer from './componets/Footer';
import {Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Layout from './pages/Layout';


function App() {
  return (
    <>
      
      
     
      <Routes>
        <Route  path="/" element={<Layout><Home/></Layout>}/>
        <Route  path="/Login" element={<Login/>}/>
      </Routes>
     
      
      </>
  );
}

export default App;
