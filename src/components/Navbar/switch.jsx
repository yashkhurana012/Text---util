
import "./Navbar.css";
import { useContext } from "react";
import UserContext from "../../context/context";

const Switch = (props) => {
  const {toast , light} = useContext(UserContext);
    let obj = props;
    let change = () => {
      obj.setLight(!obj.light);
      toast.success(`${(obj.light) ? "Dark" : "Light"} mode has been enabled`,{theme : (!light) ? "light" : "dark"})
    }
  return (
    <div className="switch-button">
            <label className="switch">
            <input type="checkbox" onChange={() => change()} checked = {(obj.light) ? false : true} />
            <span className="slider round"></span>
            </label>
            <p>Enable {obj.light ? "Dark" : "Light"} Mode</p>
          </div>
  )
}

export default Switch;