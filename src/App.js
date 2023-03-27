import logo from './logo.svg';
import './App.css';
import './css/style.css';
import Header from './componets/Header';
import Footer from './componets/Footer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';


function App() {
  return (
    <>
      <Login />
      <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Login" element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </>
  );
}

export default App;
