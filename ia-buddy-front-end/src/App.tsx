
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Admin } from './pages/Admin'
import { ChatPage } from './pages/ChatPage'

function App() {


  return (
    <BrowserRouter>
      <div className='flew flex-col min-h-screen h-screen overflow-hidden'>
        {/* <nav className='absolute right-0 bg-red-12 flex justify-center gap-3'> */}

        <nav className="flex justify-center items-center gap-6 p-4">


          <Link to="/login">Connexion à l'outil</Link>
          <Link to="/admin">Administration</Link>
          <Link to="/chat/1">Chat 1</Link>
          <button className="bg-rose-600 px-3 py-1 rounded-md text-sm text-white">FR / EN</button>
        </nav>

        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />

          <Route path='/chat/:id' element={<ChatPage />} />
        </Routes>



        {/* </nav> */}
        {/* <div className='flex-1 overflow-hidden h-full w-full'>
        </div> */}
      </div>



    </BrowserRouter>
  )
}

export default App
