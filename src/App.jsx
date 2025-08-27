import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from './pages/Home';
import Collections from './pages/Collections';
import Events from './pages/Events';
import Ticket from './pages/Ticket';
import About from './pages/About';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/events" element={<Events />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
