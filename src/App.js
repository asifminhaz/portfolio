import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Nav from './Components/Nav';
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
    <Nav></Nav>
    <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/home" element={<Home></Home>}></Route>
    <Route path="/projects" element={<Projects></Projects>}></Route>
    <Route path="/Contact" element={<Contact></Contact>}></Route>
    <Route path="/about" element={<About></About>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
