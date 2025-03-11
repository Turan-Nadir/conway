import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Square from './assets/square.tsx'
import Page from './Page.tsx'
import Hexagon from './assets/hexagon.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/hex' element={<Hexagon />}/>
        <Route path='/simple' element={<Square />}/>
        <Route path='/*' element={<Page />}/>
      </Routes>
    </Router>
  </StrictMode>,
)
