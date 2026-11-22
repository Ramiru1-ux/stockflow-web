import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
{/* Card is a component so for components we use Uppercase */}
import Home from './pages/home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />   
  </StrictMode>,
)
