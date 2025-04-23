import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import Start from './pages/Start'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper'
import CaptainLogout from './pages/CaptainLogout'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

const App = () => {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Start/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignUp/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignUp/>}/>

        {/* User Routes */}
        <Route path='/home' element={
          <UserProtectedWrapper>
          <Home/>
        </UserProtectedWrapper>}/>
        
        <Route path='users/logout' element={
          <UserProtectedWrapper>
            <UserLogout/>
          </UserProtectedWrapper>}/>

          {/* Captain Routes */}
          <Route path='riding' element={
            <UserProtectedWrapper>
              <Riding/>
            </UserProtectedWrapper>
          }/>
          
          <Route path='/captain-home' element={
            <CaptainProtectedWrapper>
              <CaptainHome/>
            </CaptainProtectedWrapper>
          }/>
          <Route path='/captains/logout' element={
            <CaptainProtectedWrapper>
              <CaptainLogout/>
            </CaptainProtectedWrapper>
          }/>
          <Route path='/captain-riding' element={
            <CaptainProtectedWrapper>
              <CaptainRiding/>
            </CaptainProtectedWrapper>
          }/>
      </Routes>
    </div>
  )
}

export default App
