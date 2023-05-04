import React from 'react'
import { useState } from "react";
import {  useNavigate } from 'react-router-dom'
import axios from 'axios';
import "../../styles/Register.css"
import { toast } from 'react-toastify';


export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const register = async (e) => {
    e.preventDefault();

    let model = { Email: email, FirstName: firstName, LastName: lastName, Password: password, authority: "user" };
    
    try {
      const response = await axios.post("https://localhost:44303/api/auth/register", model);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }
  

  const API_KEY = 'ETHsOPIqSCqZB2wRObWX3Y8gs6VMtuoC';

  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.get(`https://api.apilayer.com/email_verification/${email}`, {
        headers: {
          apikey: API_KEY,
        },
      });
      console.log(response.can_connect_smtp)
      if(response.can_connect_smtp){
        register(e);
      }
      else{
        toast.error("Kayıtlı bir mail adresi giriniz!")
      }
      toast.success(response.can_connect_smtp)
    } catch (error) {
      console.error(error);
    }
    finally {
      setIsLoading(false); // Set loading back to false when the request is done
    }
  };
  
  return (
    <> {isLoading ? (<div style={{marginTop:"8rem"}} className="text-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
    ) : (
      <div className="register-container">
        <form onSubmit={handleVerifyEmail} className="register-form">
          <h2>Register</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
             <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
          </div>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" id="firstName" name="firstName" required pattern="[A-Za-z\s]+" />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" id="lastName" name="lastName" required pattern="[A-Za-z\s]+"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required minlength="6" />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>)}
    </>
  )
}
