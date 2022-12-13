import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/home/index.jsx'
import Listar from '../components/listar/index.jsx'

export default function Router(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listar' element={<Listar />} />
      </Routes>
    </BrowserRouter>
  )
}