import React from 'react'
import img from '../download.png'


export default function Navbar() {
  return (
    <nav>
      <img src={img} width="40px" alt="logo of react" />
      <h3 className='navlogo'>ReactFacts</h3>
      <h4 className='navtext'>React Course - Project 1</h4>
    </nav>
  );
}
