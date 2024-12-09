import React from 'react'
function Navbar({setInput}) {
    return (
        <>
            <div className='nav'>
                    <h2  className='ms-3'>Movies Masala</h2>
                    <div className='searchbar'>
                    <h4>Home</h4>
                    <input type="text"  onChange={(e) => setInput(e.target.value)} className='ms-5'  />
                    <button className='btn btn-primary ms-3'>search</button>
                    </div>
            </div>
            
            </>
    )
}

export default Navbar