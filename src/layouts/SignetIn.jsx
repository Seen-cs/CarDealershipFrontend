import React from 'react'
import { Link } from 'react-router-dom'

export default function SignetIn({signOut}) {
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
<button className="btn btn-dark ml-2" style={{marginLeft:"0.5em"}}>
    <Link className="nav-link text-white" to="/user/login">Çıkış Yap</Link>
  </button>

    </>
  )
}