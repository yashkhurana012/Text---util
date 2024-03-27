import { useContext } from "react";
import UserContext from "../../context/context.js";
import "./Contact.css";

const Contact = () => {
  const { light } = useContext(UserContext);
  return (
    <div
      className={
        light ? "contact-cont light-contact" : "contact-cont dark-contact"
      }
    >
      <div className="contact-details">
        <h1>Contact Me</h1>
        <p>Created by : Ayush Agrawal</p>
        <p>Email Address : ayushagrawal6082@gmail.com</p>
        <p>Github link : https://github.com/ayush6082</p>
      </div>
    </div>
  );
};

export default Contact;
