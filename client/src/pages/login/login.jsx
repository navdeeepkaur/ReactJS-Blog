import React,{useRef, useContext} from "react";
import './login.css';
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Login(){
    
    const userRef= useRef();
    const passwordRef=useRef();
    const {dispatch, isFetching}=useContext(Context)

    const handleSubmit=async(e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try{
            const res=await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value
            })
            dispatch({type:"LOGIN_SUCCESS", payload: res.data});
        }catch(err){
            dispatch({type:"LOGIN_FALIURE"});
        }
    };
    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginInternal1">
                    <img src={ require('../../img/img1.png') } alt="" />
                </div>
                <div className="loginInternal2">
                <div className="loginTitle">
                    <i className="topIcon fa-solid fa-l"></i>
                    <i className="topIcon fa-solid fa-o"></i>
                    <i className="topIcon fa-solid fa-g"></i>
                    <i className="topIcon fa-solid fa-i"></i>
                    <i className="topIcon fa-solid fa-n"></i>
                </div>
                <div className="loginTitleInternal">Welcome to React Blog</div>
                <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" className="loginInput" placeholder="Enter your username" ref={userRef}/>
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password" ref={passwordRef}/>
                <button className="loginRegisterButton">
                <Link className="link" to="/register">Don't have an account?</Link>
                </button>
                <button className="loginButton" type="submit" disabled={isFetching}>Sign In</button>
            </form>
            
                </div>
            </div>
        </div>
    )
}