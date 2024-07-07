import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
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
        <div className='mid_header'>
          <div className='logo'>
            <img src=""></img>
          </div>
          <div className='search_box'>
            <input type='text' value='' placeholder='search'></input>
            <button><CiSearch /></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default nav
