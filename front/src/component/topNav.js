import React from 'react'
import '../style/style.css'
import { Link } from 'react-router-dom';

function topNav() {
  return (
    <>

      <div className='topNav_back d-flex justify-content-between' style={{backgroundColor:'#cb4154'}}>
          <div className='ms-3 h4 text-white' onClick={()=>{window.location.href='/'}} style={{cursor:'pointer'}}>Voting System</div>
          <Link className='me-4 text-white h5' style={{textDecoration:'none'}} to='/result'>Result</Link>
      </div>
    </>
  )
}

export default topNav;