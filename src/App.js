import { React, useEffect, useState, } from 'react'
import axios from 'axios';
import './App.css';
import Navbar from './Components/Navbar';
import NewsCarousel from './Components/NewsCarousel';
import LoginPopup from './Components/LoginPopup';
import SignUp from './Components/SignUp';
import { BrowserRouter, Routes, Link, Route}from 'react-router-dom'
import { useNavigate } from 'react-router';

function App() {
  

  return (
    <>
    <BrowserRouter>
     <main>
        <Routes>
          <Route path = '/' element = {<><Navbar /><NewsCarousel/></>} />
          <Route path = '/signin' element = {<><LoginPopup/></>}/>
          <Route path = '/createaccount' element = {<SignUp/>}/>
      </Routes>
     </main>
    </BrowserRouter>
    </>
  );
}

export default App;
