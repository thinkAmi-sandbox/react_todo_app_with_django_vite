import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './main.css'
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </StrictMode>
)
