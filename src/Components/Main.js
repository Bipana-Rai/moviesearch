import React, { useEffect, useState } from 'react'
import movies from '../data'
import Movieoutline from './Movieoutline'
import Navbar from './Navbar'
function Main() {
    const[movie,setmovie] =useState([])
    const [input,setInput]=useState("")
    useEffect(()=>{
        setmovie(movies)
    },[])
  return (
  <>
  <Navbar setInput={setInput}/>
  <Movieoutline movie={movie} input={input}/>
   </>
  )
}

export default Main