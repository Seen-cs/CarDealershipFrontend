import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function CarAdd() {
  
    const navigate = useNavigate();
   useEffect(()=>{
     if(!localStorage.getItem("token")){
       navigate("user/login")
     }
   })
    return (
    <div>ARABAAAAekleee</div>
  )
}
