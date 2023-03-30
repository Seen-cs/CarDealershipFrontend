import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import "../../styles/Login.css"
export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e) => {
        e.preventDefault();
        try {

            let model = { Email: email, Password: password };
            let response = await axios.post("https://localhost:44303/api/auth/login", model);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            navigate("/");
        } catch (error) {
            console.error(error);
        }
        console.log(email, password)
    }
    return (
        <>
            <div className="login-container">
                <form onSubmit={login} className="login-form">
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input className="form-control"  value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" />
                    </div>
                    <button type="submit">Login</button>
                    <Link to="/user/register" className="mt-2" style={{marginTop:"2rem"}}>Kayıt Ol</Link>
                </form>
            </div>

            {/* <div className="d-flex justify-content-center" style={{marginTop: "70px"}}>
    <div className="col-md-5">
    <div className="card">
        <div className="card-header">
            <h1>Giriş Sayfası</h1>
        </div>
        <div className="card-body">
            <form onSubmit={login}>
                <div className="form-group">
                    <label htmlFor="email">Mail Adresi</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" className="form-control"/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="password">Şifre</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="email" name="email" className="form-control"/>
                </div>
                <div className="form-group mt-2">
                    <button className="btn btn-outline-primary w-100">Giriş Yap</button>
                    <Link to="/register" className="mt-2" style={{float:"right"}}>Kayıt Ol</Link>
                </div>
            </form>
        </div>
    </div>
    </div>
    </div> */}
        </>
    )
}
