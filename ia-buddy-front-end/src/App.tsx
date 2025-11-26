
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Admin } from './pages/Admin'
import { ChatPage } from './pages/ChatPage'
import { LanguageProvider } from './components/LanguageProvider'
import ButtonLanguage from './components/ButtonLanguage'
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <LanguageProvider>

      <BrowserRouter>
        <div className='flew flex-col min-h-screen h-screen '>
        <nav className="flex justify-center items-center gap-6 p-4">


          <Link to="/login">{t('login')}</Link>
          <Link to="/admin">{t('admin')}</Link>
          <Link to="/chat/1">{t('chat')}</Link>
          <ButtonLanguage />
        </nav>

        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />

          <Route path='/chat/:id' element={<ChatPage />} />
        </Routes>

        </div>



      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
