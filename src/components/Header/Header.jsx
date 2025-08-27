import { useState } from "react";
import account from "./account.jpg";
import search from "./search.jpg";
import { Link } from 'react-router-dom';
import "./Header.css";



export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("Eng")

  return (
    <header className="header">
      <div className="logo">Korme</div>

      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/collections" onClick={() => setIsOpen(false)}>Collections</Link> 
        <Link to="/events" onClick={() => setIsOpen(false)}>Events</Link>
        <Link to="/ticket" onClick={() => setIsOpen(false)}>Buy ticket</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About Korme</Link>
      </nav>

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











