
import { Route, Routes } from 'react-router-dom'
import './app.css'
import { FinishPage } from './components/FinishPage'
import { HomeApp } from './components/HomeApp';
import { YogaApp } from './components/YogaApp'
import { createTheme, ThemeProvider } from '@mui/material';
import { Auth } from './Auth/Auth';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={darkTheme}>
        <Routes>
          <Route path='/' element={<Auth/>}/> 
          <Route path='/home' element={<HomeApp />} />
          <Route path="/first" element={<YogaApp />} />
          <Route path="/finish" element={<FinishPage />} />
          <Route path='*' element={<h1>404: Not Found</h1>} />
        </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App
