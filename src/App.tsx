
import { Route, Routes } from 'react-router-dom'
import './app.css'
import { FinishPage } from './components/FinishPage'
import { HomeApp } from './components/HomeApp';
import { YogaApp } from './components/YogaApp'


function App() {

  // const navigate =useNavigate()

  // useEffect(() =>{
  //   supabase.auth.onAuthStateChange((auth,session) =>{
  //     if(!session){
  //       navigate('/')
  //     }else {
  //       navigate('/home')
  //     }
  //   })
  // }, [])

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<HomeApp/> }/>
        {/* <Route path='/' element={<Auth/>}/> */}
        <Route path='/home' element = {<HomeApp/>}/>
        <Route path="/first" element={<YogaApp/>}/>
        <Route path="/finish" element={<FinishPage/>}/>
        <Route path='*' element={<h1>404: Not Found</h1>} />
      </Routes>
    </div>  
  )
}

export default App
