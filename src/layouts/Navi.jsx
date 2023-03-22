import React,{useState} from 'react'
import {Outlet,Link } from "react-router-dom";
import "../styles/Navi.css"
import SignedOut from './SignedOut'
import SignetIn from './SignetIn'
import { useNavigate } from 'react-router-dom'




export default function Navi() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()
  function handleSignOut(){
      setIsAuthenticated(false)
      navigate("/")
  }
  function handleSignIn(){
      setIsAuthenticated(true)
  }

  return (
   <> <nav className="navbar navbar-expand-lg bg-body-tertiary dark" >
   <div className="container-fluid">
     <Link to={"/"}>asdadadas</Link>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <a className="nav-link active" aria-current="page" href="#">Home</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="#">Link</a>
         </li>
         <li className="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Dropdown
           </a>
           <ul className="dropdown-menu">
             <li><a className="dropdown-item" href="#">Action</a></li>
             <li><a className="dropdown-item" href="#">Another action</a></li>
             <li><hr className="dropdown-divider"/></li>
             <li><a className="dropdown-item" href="#">Something else here</a></li>
           </ul>
         </li>
         <li className="nav-item">
           <a className="nav-link disabled">Disabled</a>
         </li>
       </ul>
       {isAuthenticated?<SignetIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
     </div>
   </div>
 </nav>

            <Outlet/></>
  )
}
