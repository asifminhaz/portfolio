import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Nav from './Components/Nav';
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";
import Blog from "./Components/Blog";
import Watch from "./Components/Watch";
import Moto from "./Components/Moto";
import Gym from "./Components/Gym";
import Theveg from "./Components/Theveg";
import Personal from "./Components/Personal";
import Influencer from "./Components/Influencer";
import Convention from "./Components/Convention";
import Eshopping from "./Components/Eshopping";
import Instrument from "./Components/Instrument";
import Starbucks from "./Components/Starbucks";

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
    <Route path="/blog" element={<Blog></Blog>}></Route>
    <Route path="/moto" element={<Moto></Moto>}></Route>
    <Route path="/gym" element={<Gym></Gym>}></Route>
    <Route path="/theveg" element={<Theveg></Theveg>}></Route>
  <Route path="/personal" element={<Personal></Personal>}></Route>
  <Route path="/influencer" element={<Influencer></Influencer>}></Route>
  <Route path="/convention" element={<Convention></Convention>}></Route>
  <Route path="/eshopping" element={<Eshopping></Eshopping>}></Route>
  <Route path="/instrument" element={<Instrument></Instrument>}></Route>
  <Route path="/starbucks" element={<Starbucks></Starbucks>}></Route>
    {/* <Route path="/watch" element={<Watch></Watch>}></Route> */}
    <Route path="*" element={<NotFound></NotFound>}></Route>

    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
