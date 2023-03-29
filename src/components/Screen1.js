import React from 'react'
import { Link } from "react-router-dom";
import "./Screen1.css"
const Screen1 = () => {
  return (
    <div className="screen1Div" style={{}}>
      <Link className='divLink' to="/screen2">
      Browse photos
      </Link>
    </div>
  )
}

export default Screen1
