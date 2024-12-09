import React, { useEffect, useState } from 'react'
import Movieinside from './Movieinside'
function Movieoutline({movie,input}) {
  const[clickedmovie,setclickedmovie]=useState()
  const[visibility,setVisibility]=useState(true)
  const[filteredmovie,setfilteredmovie]=useState(movie)
  const showmovie=(i)=>{
  setclickedmovie(movie[i])
  setVisibility(false)
  }
  useEffect(()=>{
    if(input.trim()===""){
    setfilteredmovie(movie)
    }
    else{
      const filtered=movie.filter(e=>e.title.toLowerCase().includes(input.toLowerCase()));
      setfilteredmovie(filtered)
    }
  },[input,movie])
 
  return (
    <>
  { visibility&& <div className="container">
       {filteredmovie.map((e,i)=>(
             <div className="sub-container" onClick={()=>showmovie(i)}>
             <div className="img">
                 <img className='poster' src={e.poster} alt="" />
             </div>
             <div className='detail'>
                 <h6>{e.title}</h6>
                 <p>{e.genre}</p>
             </div>
         </div>
            
        ))   
}
    </div>
}
   {!visibility&& <Movieinside  movie={movie}  clickedmovie={clickedmovie} setclickedmovie={setclickedmovie}/>} 

    </>
  )
}

export default Movieoutline