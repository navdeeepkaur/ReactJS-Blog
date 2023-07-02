import React,{useState} from "react";
import './register.css';
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register(){
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error, setError]=useState(false)

    const handleSubmit= async(e)=>{
        e.preventDefault();
        setError(false);
        try{
            const res=await axios.post("/auth/register",{
                username, email, password
            });
            res.data && window.location.replace("/login");
        }catch(err){
            setError(true);
        }
    };
    return(
        <div className="register">
            <div className="registerWrapper">
            <div className="registerInternal2">
            <div className="registerTitle">
                    <i className="topIcon fa-solid fa-r"></i>
                    <i className="topIcon fa-solid fa-e"></i>
                    <i className="topIcon fa-solid fa-g"></i>
                    <i className="topIcon fa-solid fa-i"></i>
                    <i className="topIcon fa-solid fa-s"></i>
                    <i className="topIcon fa-solid fa-t"></i>
                    <i className="topIcon fa-solid fa-e"></i>
                    <i className="topIcon fa-solid fa-r"></i>
                </div>
            <form className="registerForm" onSubmit={handleSubmit}>
                <div className="registerTitleInternal">Welcome to React Blog</div>
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter your username" onChange={e=>setUsername(e.target.value)}/>
                <label>Email</label>
                <input type="email" className="registerInput" placeholder="Enter your email" onChange={e=>setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password" onChange={e=>setPassword(e.target.value)}/>
                <button className="registerLoginButton" >
                <Link className="link" to="/login">Already have an account?</Link>
                </button>
                <button className="registerButton" type="submit">Register</button>
            </form>
            {error && <span style={{color:'red', marginTop:'10px'}}>Something Went Wrong</span>}
        </div>
        <div className="registerInternal1">
            <img src={ require('../../img/img1.png') } alt="" />
        </div>
        </div>
    </div>
    )
}