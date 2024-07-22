import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
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
          <div className='user'>
            <div className='icon'>
            <CiLogin />
            </div>
            <div className='btn'>
              <button>Login </button>
            </div>
          </div>
          <div className='user'>
            <div className='icon'>
            <CiLogout />
            </div>
            <div className='btn'>
              <button>Logout </button>
            </div>
          </div>
        </div>
        <div className='last_header'>
          
        </div>
      </div>
    </>
  )
}

export default nav
