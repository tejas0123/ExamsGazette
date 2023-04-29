import styled from 'styled-components'

export const ExamNavbar = styled.nav`
    color:;
    display:flex;
    align-items:center;
    justify-content:space-around;
    height:80px;
    background-color:#ffeb3b;
    h1{
        color:black;
        font-family:Arial;
        font-size:30px;
        text-transform-lowercase;
    }
    a{
        color:black;
        text-decoration:none;
        margin:0 1rem;
        font-size:17px;
        padding: 0px 15px;   
    }
    
    a:hover{
        color:orange;
    }

    button{
        
        border:none;
        color:black;
        font-size:17px;  
    }
   
    .loginbtn{
        background-color: #2196f3;
        border-radius:5px;
        padding 5px 10px 5px 10px;
        color:white;
    }

    .dropdown-menu li{
        text-align:left;
    }
`
