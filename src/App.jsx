import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Contact from "./components/Contact us/Contact"
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Userprovidercontext from "./context/Userprovidercontext"

function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <><Navbar />  <Home /> <Footer /></> , 

    },
    {
      path : "/About",
      element : <><Navbar />  <About /> <Footer /></> , 

    },
    {
      path : "/Contact",
      element : <><Navbar />  <Contact /> <Footer /></> , 

    }
  ])

  return (
    <Userprovidercontext >
      <RouterProvider router={router} />
    </Userprovidercontext>
    
  )
}

export default App
