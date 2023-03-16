import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { PositionProvider } from './context/ContexPosition/PositionProvider'
import { ModalProvider } from './context/ContextModal/ModalProvider'
import './index.css'
import { PostureProvider } from './context/ContextPostures/PostureProvider';
import { createTheme } from '@mui/material'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <PositionProvider>
        <ModalProvider>
          <PostureProvider>
            <App />
          </PostureProvider>
        </ModalProvider>
      </PositionProvider>
    </BrowserRouter>
  </React.StrictMode>
)
