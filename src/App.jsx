import {Routes, Route} from "react-router-dom"

import NavbarComponent from "./Components/NavbarComponent"
import FooterComponent from "./Components/FooterComponent"

import HomePage from "./Pages/HomePage"
import ProjectPage from "./Pages/ProjectPage"
import Sertifikat from "./Pages/Sertifikat"
import Blogpage from "./Pages/Blogpage"
import UpdatePage from "./Pages/UpdatePage"


function App() {

  return (
    <div>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/project" element={<ProjectPage/>}/>
        <Route path="/sertifikat" element={<Sertifikat/>}/>
        <Route path="/blog" element={<Blogpage/>}/>
        <Route path="/update" element={<UpdatePage/>}/>
      </Routes>
      <FooterComponent/>
    </div>
  )
}

export default App
