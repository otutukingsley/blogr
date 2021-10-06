import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const Arrow = styled.svg`
  position: absolute;
  top: 50%;
  transform: translateY(-50%) !important;
  margin-left: 15px;
`

const MobileMenu = () => {
  const [clickState, setClickState] = useState({ clickedEl: -1 })
  const outside = useRef('')

  const onClick = (e) => {
    if (e.currentTarget.id.indexOf('dropdown') === -1) {
      setClickState({ clickedEl: e.currentTarget.id })
    }

    console.log(e.currentTarget.id)
  }
  const onMouseLeave = (e) => {
    setClickState({ clickedEl: -1 })
  }

  const handleClickOutside = (e) => {
    if (outside.current && !outside.current.contains(e.target)) {
      setClickState({ clickedEl: -1 })
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="mobile-menu mobile-card" ref={outside}>
      <ul className="mobile-list">
        <li
          className="mobile-list-item"
          onClick={onClick}
          id="product"
          onMouseLeave={onMouseLeave}
        >
          <a href="#!" className="mobile-link">
            Product{' '}
            <Arrow
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="7"
            >
              <path
                fill="none"
                stroke="#FF7B86"
                strokeWidth="2"
                d="M1 1l4 4 4-4"
              />
            </Arrow>
          </a>
          {clickState.clickedEl === 'product' && (
            <div className="mobile-menu-link-card bg-mobile-card">
              <ul className="mobile-drop-list">
                <li className="mobile-drop-list-item">
                  <a href="#!">Overview</a>
                </li>
                <li className="mobile-drop-list-item">
                  <a href="#!">Pricing</a>
                </li>
                <li className="mobile-drop-list-item">
                  <a href="#!">Marketplace</a>
                </li>
                <li className="mobile-drop-list-item">
                  <a href="#!">Features</a>
                </li>
                <li>
                  <a href="#!">Integration</a>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li
          className="mobile-list-item"
          onClick={onClick}
          id="company"
          onMouseLeave={onMouseLeave}
        >
          <a href="#!" className="mobile-link">
            Company{' '}
            <Arrow
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="7"
            >
              <path
                fill="none"
                stroke="#FF7B86"
                strokeWidth="2"
                d="M1 1l4 4 4-4"
              />
            </Arrow>
          </a>
          {clickState.clickedEl === 'company' && (
            <div className="mobile-menu-link-card bg-mobile-card">
              <ul className="mobile-drop-list">
                <li className="mobile-drop-list-item">
                  <a href="#!">About</a>
                </li>
                <li className="mobile-drop-list-item">
                  <a href="#!">Team</a>
                </li>
                <li className="mobile-drop-list-item">
                  <a href="#!">Blog</a>
                </li>
                <li>
                  <a href="#!">Career</a>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li
          className="mobile-list-item"
          onClick={onClick}
          id="connect"
          onMouseLeave={onMouseLeave}
        >
          <a href="#!" className="mobile-link">
            Connect{' '}
            <Arrow
              className="svg"
              Arrow
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="7"
            >
              <path
                fill="none"
                stroke="#FF7B86"
                strokeWidth="2"
                d="M1 1l4 4 4-4"
              />
            </Arrow>
          </a>
          {clickState.clickedEl === 'connect' && (
            <div className="mobile-menu-link-card bg-mobile-card">
              <ul className="mobile-drop-list">
                <li className="mobile-drop-list-item">
                  <a href="#!">Contact</a>
                </li>
                <li className="mobile-drop-list-item">
                  <a href="#!">Newsletter</a>
                </li>
                <li>
                  <a href="#!">LinkedIn</a>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
      <div className="line-rule"></div>
      <ul className="mobile-list">
        <li className="mobile-list-item">
          <a href="#!" className="mobile-link">
            Login
          </a>
        </li>
        <button className="btn">Sign Up</button>
      </ul>
    </div>
  )
}

export default MobileMenu
