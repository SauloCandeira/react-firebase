import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Roadmap } from './pages/Roadmap';
import { Testes } from './pages/Testes';
import { Login } from './pages/Login';


export function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Roadmap" element={<Roadmap />} />
        <Route path="/testes" element={<Testes />} />
      </Routes>
    </BrowserRouter>

  )
}
