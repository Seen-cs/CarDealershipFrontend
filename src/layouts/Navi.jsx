import React,{useState} from 'react'
import {Outlet } from "react-router-dom";
import "../styles/Navi.css"
import SignedOut from './SignedOut'
import SignetIn from './SignetIn'
import { useNavigate } from 'react-router-dom'




export default function Navi() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const navigate = useNavigate()
  function handleSignOut(){
      setIsAuthenticated(false)
      navigate("/")
  }
  function handleSignIn(){
      setIsAuthenticated(true)
  }

  return (
   <> <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <a class="navbar-brand" href="/">Seen Car</a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarNav">
     <ul class="navbar-nav">
       <li class="nav-item active">
         <a class="nav-link" href="/">Anasayfa</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="/">Arabalar</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="/">İletişim</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="/">Hakkımızda</a>
       </li>
     </ul>
     <ul class="navbar-nav ml-auto">
       <li class="nav-item">
       {isAuthenticated?<SignetIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
       </li>
     </ul>
   </div>
 </nav>
       
     

            <Outlet/></>
  )
}
