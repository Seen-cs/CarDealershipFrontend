import React, { useEffect } from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import "../../styles/Login.css"
export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(()=>{
        if(localStorage.getItem("token")){
            navigate("/car")
        }
        
    })
    const login = async (e) => {
        e.preventDefault();
        let model = { Email: email, Password: password };
        try {
           let response = await axios.post("https://localhost:44303/api/auth/login", model);
           localStorage.setItem("token", response.data.token);           
           navigate("/"); 
          
        } catch (error) {
            console.error(error);
        }
        
    }
    return (
        <>
            <div className="login-container">
                <form onSubmit={login} className="login-form">
                    <h2>Giriş Yap</h2>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input className="form-control"  value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required minlength="6" />
                    </div>
                    <button type="submit">Login</button>
                    <Link to="/user/register" className="mt-2" style={{marginTop:"3rem"}}>Kayıt Ol</Link>
                </form>
            </div>

        </>
    )
}
