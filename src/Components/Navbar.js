import { React, useEffect, useState } from 'react'
import { ExamNavbar } from '../styled/Navbar.styled'
import axios from 'axios';
import { useNavigate } from 'react-router';

function Navbar() {
  // console.log(props.btnText);
  const[href, sethref] = useState('/signin');
  const[btnText, setBtnText] = useState('Sign In');
  const[welcome, setWelcome] = useState('');
  const navigate = useNavigate();
  useEffect(() =>{
    let sessionUser =  sessionStorage.getItem("sessionUser");
    if(sessionUser){
      sethref('');
      setBtnText("Sign Out");
      setWelcome("Welcome "+sessionUser);
    }
    else{
      sethref('/signin');
      setBtnText("Sign In");
      setWelcome('');
    }
  }, [])

  function logout()
  {
    let sessionUser =  sessionStorage.getItem("sessionUser");
    if(sessionUser){
      axios.defaults.withCredentials = true;
      sessionStorage.removeItem("sessionUser");
      axios.get("http://localhost:4000/logout", {cookiename : "user_sid"}) //api call to clear the cookie on the server
      .then(res =>{
       console.log(res);
       navigate('/');
      })
    }
  }
  return (
    <>
    <ExamNavbar>
      <h1>ExamsGazette</h1>
      <div  className="dropdown show">
      <a href=''>Home</a>
      <a href=''>Write an article</a>
      <a href=''>Latest</a>
      <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Streams
  </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Engineering</a></li>
            <li><a className="dropdown-item" href="#">Medical</a></li>
            <li><a className="dropdown-item" href="#">Post Graduation</a></li>
            <li><a className="dropdown-item" href="#">Civil Services</a></li>
          </ul>
      </div>
      <a role='button' href = {href} className='loginbtn' onClick={logout}>{btnText}</a>
    </ExamNavbar>
    <h2 style={{textAlign:'center', marginTop:"10px", color: "green"}}>{welcome}</h2>
    </>
  )
}

export default Navbar
