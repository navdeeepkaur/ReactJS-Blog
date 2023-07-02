import React,{useState, useEffect} from "react";
import axios from "axios";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar(){
    const [cats, setCats]=useState([]);
    useEffect(()=>{
        const getCats= async()=>{
            const res= await axios.get("/categories")
            setCats(res.data)
        }
        getCats();
    },[]);
    return(
        <div className="sidebar">
            <div className="sidebarItem">
                <img className="sidebarImg" src="https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Illo, dignissimos? Id itaque aut voluptatum quo. Unde 
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map(c=>(
                        <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
                <div className="sdidebarItem">
                    <span className="sidebarTitle">
                        <div className="sidebarSocial">
                            <i class="sidebarIcon fa-brands fa-square-facebook"></i>
                            <i class="sidebarIcon fa-brands fa-square-twitter"></i>
                            <i class="sidebarIcon fa-brands fa-square-pinterest"></i>
                            <i class="sidebarIcon fa-brands fa-square-instagram"></i>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}