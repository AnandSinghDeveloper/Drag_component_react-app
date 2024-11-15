import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';





import React from 'react'
import Backgraund from './component/Backgraund';
import Forground from './component/Forground';
 
export default function App() {
  return (
     <div className=' relative  w-full h-screen bg-zinc-800'>
      <Backgraund/>
      <Forground/>
     
     </div>
      
  )
}


