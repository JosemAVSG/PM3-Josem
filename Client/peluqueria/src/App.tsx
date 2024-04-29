
import './App.css'
import Home from './views/Home'
import Register from './views/Register'
import Login from './views/Login'
import NotFound from './views/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/*' element={<NotFound />} />
          {/* <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
