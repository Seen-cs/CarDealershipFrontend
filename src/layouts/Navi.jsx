import React,{useState} from 'react'
import { Outlet } from "react-router-dom";
import "../styles/Navi.css"
import SignedOut from './SignedOut'
import SignetIn from './SignetIn'
import { useNavigate } from 'react-router-dom'
import "../pages/CarAdd"
import CarAdd from '../pages/CarAdd';



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
         <a class="nav-link" href="/" data-bs-toggle="modal" data-bs-target="#addModel">Araba Ekle</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="/contact">İletişim</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="/about">Hakkımızda</a>
       </li>
     </ul>
     <ul class="navbar-nav ml-auto">
       <li class="nav-item">
       {isAuthenticated?<SignetIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
       </li>
     </ul>
   </div>
 </nav>
       
     
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
