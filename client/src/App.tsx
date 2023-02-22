import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SignIn, SignUp } from './pages'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/groups'>
        <Route path='' element={<h1>groups</h1>}/>
        <Route path=':id' element={<h1>particular group</h1>}/>
      </Route>
    </Routes>
  )
}

export default App