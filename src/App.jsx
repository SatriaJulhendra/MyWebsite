import {Routes, Route} from "react-router-dom"

import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./Components/FooterComponent"

import HomePage from "./Pages/HomePage"
import ProjectPage from "./Pages/ProjectPage"
import Sertifikat from "./Pages/Sertifikat"
import Blogpage from "./Pages/Blogpage"
import UpdateComponent from "./Components/UpdateComponent"


function App() {

  return (
    <div>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/project" element={<ProjectPage/>}/>
        <Route path="/sertifikat" element={<Sertifikat/>}/>
        <Route path="/blog" element={<Blogpage/>}/>
        <Route path="/update" element={<UpdateComponent/>}/>
      </Routes>
      <FooterComponent/>
    </div>
  )
}

export default App
