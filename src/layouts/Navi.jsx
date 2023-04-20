import React, { useEffect, useState } from 'react'
import {  Link, Outlet } from "react-router-dom";
import "../styles/Navi.css"
import SignedOut from './SignedOut'
import SignetIn from './SignetIn'
import {useNavigate } from 'react-router-dom'
import "../pages/CarAdd"
import CarAdd from '../pages/CarAdd';

export default function Navi() {
   useEffect(()=>{
     const carAdd = document.getElementById("carAdd")
    
       if(localStorage.getItem("token")){
         carAdd.style.display = 'block';
       }
       else{
         carAdd.style.display = 'none';
       }
    
   })

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
   <> <nav className="navbar navbar-expand-lg navbar-light bg-light">
   <a className="navbar-brand" href="/">
     Seen Car
   </a>
   <button
     className="navbar-toggler"
     type="button"
     data-toggle="collapse"
     data-target="#navbarNav"
     aria-controls="navbarNav"
     aria-expanded="false"
     aria-label="Toggle navigation"
   >
     <span className="navbar-toggler-icon" />
   </button>
   <div className="collapse navbar-collapse" id="navbarNav">
     <ul className="navbar-nav">
       <li className="nav-item active">
       <Link to="/" className="nav-link">Anasayfa</Link>
       </li>
       <li className="nav-item active">
       <Link to="/car" className="nav-link">Arabalar</Link>
       </li>
       <li className="nav-item">
         <a
           className="nav-link"
           id="carAdd"
           href="/"
           data-bs-toggle="modal"
           data-bs-target="#addModel"
         >
           Araba Ekle
         </a>
       </li>
       <li className="nav-item">
       <Link to="/contact" className="nav-link">İletişim</Link>
       </li>
       <li className="nav-item">
       <Link to="/about" className="nav-link">Hakkımızda</Link>
       </li>
     </ul>
     <ul className="navbar-nav ml-auto">
       <li className="nav-item">
       {isAuthenticated?<SignetIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
       </li>
     </ul>
   </div>
 </nav>
 
       {/* token yoksa araba ekle gözükmüyo*/ }
     
 <div
  className="modal fade"
  id="addModel"
  aria-hidden="true"
  aria-labelledby="addModelLabel"
  tabIndex={-1}
>
   <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
          Ürün ekle
        </h1>
        <button
          type="button"
          id="addModelCloseBtn"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div className="modal-body">
        <CarAdd></CarAdd>
      </div>
      <div className="modal-footer">
       
      </div>
    </div>
  </div>
</div>
            <Outlet/></>
  )
}
