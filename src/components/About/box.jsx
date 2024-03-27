import  { useState } from 'react'
import './About.css'
import { GoChevronDown } from "react-icons/go";
const Box = (props) => {
    let obj = props;
  const [open, setOpen] = useState(false);
  let rotate = {
    transform: open ? "rotate(180deg)" : "",
  };
  let hide = {
    height: open ? "auto" : "0px",
  };
  return (
    <>
         <div>
            <button onClick={() => setOpen(!open)}>
              <p>{obj.heading}</p>
              <GoChevronDown className="down" style={rotate} />
            </button>
            <div className="paragraph" style={hide}>
              <p>{obj.paragraph}</p>
            </div>
          </div>
    </>
  )
}

export default Box;