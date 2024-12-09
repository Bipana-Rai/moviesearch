import React, { useState } from 'react'
function Movieinside({movie,clickedmovie}) {
    const[newclicked,setnewclicked]=useState(clickedmovie)
    const showmovie=(i)=>{
        setnewclicked(movie[i])
        }
  return (
    <>

    <div className='outline'>
        <div className='trailer'>
        <img src={newclicked.trailer} alt="" />
        </div>
        <div className='moviesdata'>
            <div className="movieimage">
                <img src={newclicked.poster} alt="" />
            </div>
            <div className='description'>
                <div className="reviews">
                    <h2 className='ms-3'>{newclicked.title}</h2>
                    <p className='ms-3'>
                        <span>{newclicked.year}</span>
                        <span className='ms-3'>{`${newclicked.runtime} minutes`}</span>
                    </p>
                    <p className='ms-3'>
                        <span>{` language: ${newclicked.language}`}</span>
                        <span className='ms-4'>{`imdb:${newclicked.rating}/10`}</span>
                    </p>
                </div>
                <div className="discp">
                    <p className='ms-3 pl'><span>{newclicked.plot}</span></p>
                    <p className='ms-3'>{`Director:${newclicked.director}`}</p>
                    <p className='ms-3'>{`Starring:${newclicked.actors}`}</p>
                    <p className='ms-3'>{`Genre:${newclicked.genre}`}</p>
                    <p className='ms-3'>{`Awards:${newclicked.awards}`}</p>
                </div>
            </div>

        </div>
        </div>
        <div className=" newcontainer">
        {movie.map((e,i)=>(
             <div className="sub-container " onClick={()=>showmovie(i)}>
             <div className="img">
                 <img className='poster' src={e.poster} alt="" />
             </div>
             <div className='detail'>
                 <h6>{e.title}</h6>
                 <p>{e.genre}</p>
             </div>
         </div>
        ))   }
    </div>

    </>
  )
}

export default Movieinside