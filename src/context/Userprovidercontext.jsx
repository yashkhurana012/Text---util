
import { useState } from 'react'
import UserContext from './context'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react/prop-types
const Userprovidercontext = ({ children }) => {
    const [light , setLight] = useState(true)
  return (
    <UserContext.Provider value={{light , setLight , toast}}>
        {children}
        <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme= {(light) ? "light" : "dark"}
            bodyClassName= "toastbody"
        />
   </UserContext.Provider>
  )
}

export default Userprovidercontext