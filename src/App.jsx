import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import MyState from './Context/myState';
import NoPage from './Pages/404/noPage';

const App = () => {
  return (
    <MyState>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<NoPage/>} />
        </Routes>
      </BrowserRouter>
    </MyState>
  )
}

export default App