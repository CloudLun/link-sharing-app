import './App.css'

import LoginPage from './pages/LoginPage'
import AccountPage from './pages/AccountPage'
import LinksPage from './pages/LinksPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

function App() {


  const isDesktop = ({ query: '(min-width: 1024px)' })

  return (
    <div className=' w-[100vw] h-[100vh] bg-light_grey'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path="/create-account" element={<AccountPage />}></Route>
          <Route path="/links" element={<LinksPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
