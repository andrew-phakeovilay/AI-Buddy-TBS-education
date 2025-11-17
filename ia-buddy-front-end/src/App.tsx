
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'

function App() {
  

  return (
    <BrowserRouter>

      <nav>

        <Link to="/login">Connexion à l'outil</Link>


      </nav>

      <Routes>

        <Route path="/login" element={<Login />} />


      </Routes>

    </BrowserRouter>
  )
}

export default App
