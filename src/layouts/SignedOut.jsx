import React, { useEffect } from 'react'
import "../styles/SignedOut.css"
import { Link, useNavigate } from 'react-router-dom'

export default function SignedOut({signIn}) {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("user/login")
    }
  })
  return (
    <div>
        
  {/* <button onClick={signIn} className="btn btn-primary">
    <Link className="nav-link text-white" to="/user/login">Giriş Yap</Link>
  </button>


  <button className="btn btn-primary ml-2" style={{marginLeft:"0.5em"}}>
    <Link className="nav-link text-white" to="/user/register">Kayıt ol</Link>
  </button>
 */}

    </div>
  )
}
