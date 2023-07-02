
import Home from "./pages/home/home";
import TopBar from "./components/topbar/topbar";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import Settings from "./pages/settings/settings";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import { useContext } from "react";
import { Context } from "./context/Context";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const {user}=useContext(Context);
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/register" element={user?<Home/>:<Register/>}></Route>
        <Route path="/login" element={user?<Home/>:<Login/>}></Route>
        <Route path="/settings" element={user?<Settings/>:<Register/>}></Route>
        <Route path="/write" element={user?<Write/>:<Register/>}></Route>
        <Route path="/post/:postId" element={<Single/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
