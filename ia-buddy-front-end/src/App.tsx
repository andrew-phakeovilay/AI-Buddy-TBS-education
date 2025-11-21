import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Admin } from './pages/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

      <nav className="flex justify-center items-center gap-6 p-4">
        <Link to="/">Accueil</Link>
        <Link to="/admin">Administration</Link>

        <button className="bg-rose-600 px-3 py-1 rounded-md text-sm text-white">FR / EN</button>
      </nav>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />


      </Routes>

    </BrowserRouter>
  )
}

export default App
