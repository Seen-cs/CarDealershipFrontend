import React from 'react'
import { useState } from "react";
import {  useNavigate } from 'react-router-dom'
import axios from 'axios';
import "../../styles/Register.css"

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    let model = { Email: email, FirstName: firstName, LastName: lastName, Password: password, authority: "user" };

    try {
      const response = await axios.post("https://localhost:44303/api/auth/register", model);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div className="register-container">
        <form onSubmit={register} className="register-form">
          <h2>Register</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" id="firstName" name="firstName" />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" id="lastName" name="lastName" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>

        </form>
      </div>


    </>
  )
}
