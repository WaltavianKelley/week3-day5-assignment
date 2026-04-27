import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Details from './pages/Details';
import Navbar from './components/Navbar';


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
