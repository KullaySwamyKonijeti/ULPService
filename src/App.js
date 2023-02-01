import React, { useEffect } from 'react';
import Home from './component/Home';
import Login from './component/Login';
import './App.css';
import {Route,Routes} from 'react-router-dom'
// import Cookies from 'js-cookie';

function App() {
  // useEffect(()=>{
  //   let jwtToken = Cookies.get("jwt_Token");
  //   if(jwtToken =="" || jwtToken !== null){
  //     checkAuth();
  //   }else{
  //     window.Location.replace("http://localhost:3000")
  //   }
  // })
    return (
          <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route exact path='/home' element={<Home/>}/>
            {/* <Route exact path='/home2' element={<Home2/>}/> */}
          </Routes>
    )
}
export default App;