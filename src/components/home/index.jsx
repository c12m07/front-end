import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';


export default function Home() {

  const navigate = useNavigate()

  function listar(){
    navigate("/listar");
  }
  
  return (
    <div className='Title'>
      <h1 onClick={listar}>DEPORTES</h1>
    </div>
  )
}