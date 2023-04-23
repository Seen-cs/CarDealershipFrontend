import React from 'react'
import { Link } from 'react-router-dom'

export default function SignetIn({signOut}) {
  const logOut= ()=>{
    localStorage.removeItem('token');
   //user silmeyi kaldırdın register işleminde yazdırmayıda kaldırdın

  }

  return (
    <>
       
    {/*   <div class="dropdown">
  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </a>

  <ul class="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li className="dropdown-item" ><Link onClick={signOut} style={{color:"black"}} to={"/user/login"}>Çıkış yap</Link></li>
  </ul>
</div>*/}
{
localStorage.getItem("token")&&
  <button onClick={logOut} className="btn btn-dark ml-2" style={{marginLeft:"0.5em"}}>
    <Link onClick={signOut} className="nav-link text-white" to="/">Çıkış Yap</Link>
  </button>}

    </>
  )
}
