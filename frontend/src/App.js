import React,{useEffect} from 'react'
import Signup from './components/Authentication/signup.js'
import Signin from './components/Authentication/signin.js'
import Navbar from './components/Navbar/navbar.js'
import Catalogue from './components/catalogue/catalogue.js'
import Home from './components/Home/home.js'
import OnlineOrdering from './components/onlineorder/onlineordering.jsx'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {useDispatch} from "react-redux"
import {authActions} from './store'
import About from './components/About/About.js'
import {ToastContainer} from 'react-toastify';
import Callpage from './components/callpage/callpage.js';
import Service from './components/customerservice/customerservice.js';
import 'react-toastify/dist/ReactToastify.css';


const App=()=>{
  const dispatch=useDispatch();
  useEffect(()=>{
    //refresh karne pe wo login hi rehega component and if iska use na kare to wo refresh karne pe logout ho jayega
    //isliye ham check kar rahe h whether session storage m id h if h to login rakho refresh karne par
    //component mount kar rahe
    const id=sessionStorage.getItem("id");
    if(id){
    dispatch(authActions.login())
    }
  },[])
  return (
    <div>
    <Router>
    <Navbar/>
    <ToastContainer/> 
      <Routes>
      <Route exact path="/" element={<Home/>}/>
        <Route exact path="/menu" element={<Catalogue/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/service" element={<Service/>}/>
        <Route exact path="/signin" element={<Signin/>}/>
        <Route exact path="/call" element={<Callpage/>}/>
        <Route exact path="/onlineordering" element={<OnlineOrdering/>}/>
        <Route exact path="/signup" element={<Signup/>}/>

      </Routes>
    </Router>
    </div>
  )
}

export default App