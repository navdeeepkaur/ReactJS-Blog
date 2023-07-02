import React from "react";
import "./header.css";

export default function Header()
{
    return(
        <div className="header">
            <div className="headerImg">
                <img src="https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhkJTIwcGhvdG9zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                <img src="https://images.pexels.com/photos/14214711/pexels-photo-14214711.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <img src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img src="https://images.pexels.com/photos/14214711/pexels-photo-14214711.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            </div>
        </div>
    );
}