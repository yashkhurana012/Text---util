import { useContext, useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import Switch from "./switch";
import { NavLink} from "react-router-dom";
import UserContext from "../../context/context";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {light , setLight} = useContext(UserContext);

 
  let navStyle = ({isActive}) => {
    if(light){
      return {fontSize : (isActive) ? "1.5rem" : "1rem" , textDecoration : "none" , color :  (isActive) ? "black" : ""}
    }
    else{
      return {fontSize : (isActive) ? "1.5rem" : "1rem"  , textDecoration : "none", color : (isActive) ? "white" : ""}
    }    
  }

  
  return (
    <>
      <div className="nav-container">
        <div className= {(light ? "navbar light" : "navbar dark")}>
          <div className="links_logo">
            <h1 className="logo">TextUtils</h1>
            <NavLink to = "/" style={navStyle}><p className="home">Home</p></NavLink>
            <NavLink style={navStyle} to = "/about" ><p className="about">About Us</p></NavLink>
            <NavLink to = "/contact" style={navStyle}><p className="contact">Contact</p></NavLink>
            
            
          </div>
        <Switch light = {light} setLight ={setLight} />

          <div className="hamburger">
            <button onClick={() => setOpen(!open)}>
              <FaBars id="bar" />
            </button>
          </div>
        </div>

        <div
          className= {(light ? "small_menu light" : "small_menu dark")}
          style={{ height: open ? "170px" : "0" }}
        >
          <div className="links_logo">
            <NavLink to = "/" style={navStyle}><p className="home" >Home</p></NavLink>
            <NavLink to = "/about" style={navStyle}><p className="about" >About Us</p></NavLink>
            <NavLink to = "/contact" style={navStyle}><p className="contact" >Contact</p></NavLink>
          </div>
          
          <Switch light = {light} setLight ={setLight}/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
