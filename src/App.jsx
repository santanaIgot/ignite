import { useState } from 'react'
import {Post} from './Post'
import './global.css'
import { Header } from './components/header'

export function App(props) {
  return (
    <div>
        <Header/>
        <Post 
          author="Iguete" 
          content="lorem"
        />
        <Post/>
        <Post/>
    </div>
    
  )
}


