import React from "react";
import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import "./home.css";
import Header from "../../components/header/header";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/sidebar";
import axios from "axios";

export default function Home() 
{
    const [posts, setPosts]=useState([]);
    const {search}=useLocation();
    
    useEffect(()=>{
        const fetchPosts= async()=>{
            const res=await axios.get("/posts"+search)
            setPosts(res.data)
        }
        fetchPosts()
    },[search])
    return(
        <>
        <Header/>
        <Sidebar/>
        <div className="home">
            <Posts posts={posts}/>
        </div>
        </>
    )
}