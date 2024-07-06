import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import './nav.css'


const nav = () => {
  return (
    <>
      <div className='header'>
        <div className='top_header'>
            <div className='icon'>
            <MdLocalShipping />
            </div>
            <div className="info">
              <p>Free Shipping When Shopping upto $1000</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default nav
