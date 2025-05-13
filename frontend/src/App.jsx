// import { Box } from 'antd'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import Navbar from './components/navbar'

function App() {

  return (
    <div minHeight='100vh' >
      <Navbar/>
      <Routes>
        <Route path ='/' element={<HomePage/>}  />
        <Route path ='/create' element={<CreatePage/>}  />
      </Routes>
    </div>

  )
}

export default App
