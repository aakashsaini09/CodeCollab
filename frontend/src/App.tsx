import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import EditorPage from './pages/EditorPage'
import { Toaster } from 'react-hot-toast'
function App() {

  return (
    <> 
    <div className='min-h-[100vh] bg-gray-900'>
    <div>
      <Toaster 
      position='top-right'
      
      ></Toaster>
    </div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/editor/:id' element={<EditorPage/>}/>
    </Routes>
    </BrowserRouter>
    </div> 
    </>
  )
}

export default App
