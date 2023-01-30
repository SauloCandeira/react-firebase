import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Roadmap } from './pages/Roadmap';


export function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Roadmap />} />
      </Routes>
    </BrowserRouter>

  )
}
