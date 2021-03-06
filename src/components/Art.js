import React from 'react'
import { ArT } from './styles/themes'


const Art = () => {
  return (
    <ArT>
      <div className="art-img-container">
        <img src="/images/illustration-phones.svg" alt="" />
      </div>
      <div className="infrastructure">
        <h1>State of the Art Infrastructure</h1>
        <p>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </ArT>
  )
}

export default Art
