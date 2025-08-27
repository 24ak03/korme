import { useState } from "react";
import account from "./account.jpg";
import search from "./search.jpg";
import { Routes, Route, Link } from 'react-router-dom';
import "./Header.css";
import Events from "../../pages/Events";
import About from "../../pages/About";
import Ticket from "../../pages/Ticket";
import Home from "../../pages/Home";
import Collections from "../../pages/Collections";



export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("Eng")

  return (
    <header className="header">
      <div className="logo">Korme</div>

      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/collections">Collections</Link> 
        <Link to="/events" onClick={() => setIsOpen(false)}>Events</Link>
        <Link to="/ticket" onClick={() => setIsOpen(false)}>Buy ticket</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About Korme</Link>
      </nav>
                  <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/collections" element={<Collections />} />
        <Route path="/events" element={<Events />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/about" element={<About />} />
      </Routes>

    <div className="search-container">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="language-selector">
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="KZ">Kz</option>
          <option value="RU">Ru</option>
          <option value="ENG">Eng</option>
        </select>
      </div>
      <div className="account-circle">
        <img src={account} alt="Account" />
      </div>

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </div>
    </header>
    
  );
  
}











