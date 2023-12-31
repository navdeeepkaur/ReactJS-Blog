import { useContext } from "react";
import { Context } from "../../context/Context";
import "./topbar.css";
import { Link } from "react-router-dom";

export default function TopBar()
{
  const {user, dispatch}=useContext(Context);
  const PF="http://localhost:5000/images/"
  const handleLogout=()=>{
    dispatch({type:"LOGOUT"});
  };
    return(
        <div className="top">
           <div className="topLeft">
             <i className="topIcon fa-solid fa-b"></i>
             <i className="topIcon fa-solid fa-l"></i>
             <i className="topIcon fa-solid fa-o"></i>
             <i className="topIcon fa-solid fa-g"></i>
           </div>
           <div className="topCenter">
             <ul className="topList">
                <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                <li className="topListItem"><Link className="link" to="/contact">CONTACT</Link></li>
                <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
             </ul>
           </div>
           <div className="topRight">
            {
              user ? (
                <Link to="/settings">
             <img 
             className="topImage"
             src={PF+user.profilePic}
             alt="" />
             </Link>
              ) : (
              <ul className="topList">
              <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
              <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>
              </ul>
             )
             }
           </div>
        </div>
    );
}