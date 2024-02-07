import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import EventDetail from './pages/EventDetail'
import Profile from './pages/Profile'
import MainLayout from './layout/MainLayout'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/event/:eventId' element={<EventDetail />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default App