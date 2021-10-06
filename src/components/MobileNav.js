import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const Arrow = styled.svg`
  position: absolute;
  top: 50%;
  transform: translateY(-50%) !important;
  margin-left: 15px;
`

const MobileNav = () => {
  return (
    <div className="mobile-nav">
      <ul className="mobile-nav-items">
        <li className="mobile-nav-item">
          <a href="#!">
            Product <img src="/images/icon-arrow-dark.svg" alt="" />
          </a>
          <ul className="sub-menu">
            <li className="sub-menu-item">
              <a href="#!">Overview</a>
            </li>
            <li className="sub-menu-item">
              <a href="#!">Pricing</a>
            </li>
            <li className="sub-menu-item">
              <a href="#!">Marketplace</a>
            </li>
            <li className="sub-menu-item">
              <a href="#!">Features</a>
            </li>
            <li className="sub-menu-item">
              <a href="#!">Integration</a>
            </li>
          </ul>
        </li>
        <li className="mobile-nav-item">
          <a href="#!">
            Company <img src="/images/icon-arrow-dark.svg" alt="" />
          </a>
          <ul className="sub-menu">
            <li className="sub-menu-item">
              <a href="#!">About</a>
            </li>
            <li className="sub-menu-item">
              <a href="#!">Team</a>
            </li>
            <li className="sub-menu-item">
              <a href="#!">Blog</a>
            </li>
            <li className="sub-menu-item">
              <a href="#!">Career</a>
            </li>
          </ul>
        </li>
        <li className="mobile-nav-item">
          <a href="#!">
            Connect <img src="/images/icon-arrow-dark.svg" alt="" />
          </a>
          <ul className="sub-menu">
            <li className="sub-menu-item">
              <a href="#!">Contact</a>
            </li>
            <li className="sub-menu-item">
              <a href="#!">Newsletter</a>
            </li>
            <li className="sub-menu-item">
              <a href="#!">LinkedIn</a>
            </li>
          </ul>
        </li>
      </ul>
      <hr />
      <div className="mobile-btns">
        <button className="login">Login</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </div>
  )
}

export default MobileNav
