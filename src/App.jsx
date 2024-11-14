import { MdOutlet } from 'react-icons/md'
import './App.css'
import Header from './Componants/Header'
import Home from './Componants/Home'

import React from 'react'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
    
    <Outlet />
    </>
  )
}
