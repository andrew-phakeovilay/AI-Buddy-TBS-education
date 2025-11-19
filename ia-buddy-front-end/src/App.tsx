import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { ChatPage } from './pages/ChatPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='flew flex-col min-h-screen h-screen '>
        <nav className='absolute bg-red-12 flex justify-center gap-3'>

          <Link to="/">Accueil</Link>
          <Link to="/chat/1">Chat 1</Link>

        </nav>
        <div className='flex-1 overflow-hidden h-full w-full'>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path='/chat/1' element={<ChatPage />} />

          </Routes>
        </div>
      </div>



    </BrowserRouter>
  )
}

export default App
