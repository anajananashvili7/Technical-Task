'use client'

'use client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header"
import MyCards from "../pages/MyCards"
import About from "../pages/About";
import TeamArea from "../pages/Team";
import Reviews from "../pages/Reviews";
import Footer from "../components/Footer"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/myCards" element={<MyCards />} />
        <Route path="/team" element={<TeamArea />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
