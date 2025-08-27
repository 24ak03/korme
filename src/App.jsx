import { Routes, Route, Link } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from './pages/Home';


function App() {
  return (
    <div>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
