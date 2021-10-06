import React, { Fragment, useState, useEffect, useRef } from 'react'
import { HeaderSection, HeaderContainer } from './styles/themes'

const Header = ({ width, handleMenuShow, menu }) => {
  const [hoverState, setHoverState] = useState({ hoveredEl: -1 })
  const outside = useRef('')

  const onMouseOver = (e) => {
    if (e.currentTarget.id.indexOf('dropdown') === -1) {
      setHoverState({ hoveredEl: e.currentTarget.id })
    }

    console.log(hoverState.hoveredEl)
  }
  const onMouseLeave = (e) => {
    setHoverState({ hoveredEl: -1 })
  }

  const handleClickOutside = (e) => {
    if (outside.current && !outside.current.contains(e.target)) {
      setHoverState({ hoveredEl: -1 })
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  return (
    <Fragment>
      <HeaderSection>
        <HeaderContainer>
          <nav className="nav-bar">
            <div className="img-container">
              <img src="./images/logo.svg" alt="" />
            </div>
            {width > 947 && (
              <ul className="nav-links-left">
                  <li
                    id="product"
                    className="nav-links-item-left"
                    onMouseEnter={onMouseOver}
                  >
                    <a href="#!">
                      Product{' '}
                      <img
                        src="./images/icon-arrow-light.svg"
                        alt=""
                        className="rotate"
                      />
                    </a>
                    {hoverState.hoveredEl === 'product' && (
                      
                        <div
                          className="cards"
                          onMouseLeave={onMouseLeave}
                          ref={outside}
                        >
                          <ul className="card-list">
                            <li className="card-list-item">
                              <a href="#!">Overview</a>
                            </li>
                            <li className="card-list-item">
                              <a href="#!">Pricing</a>
                            </li>
                            <li className="card-list-item">
                              <a href="#!">Marketplace</a>
                            </li>
                            <li className="card-list-item">
                              <a href="#!">Features</a>
                            </li>
                            <li className="card-list-item">
                              <a href="#!">Integration</a>
                            </li>
                          </ul>
                        </div>
                     
                    )}
                  </li>
   
                  <li
                    className="nav-links-item-left"
                    id="connect"
                    onMouseOver={onMouseOver}
                  >
                    <a href="#!">
                      Connect <img src="./images/icon-arrow-light.svg" alt="" />
                    </a>
                    {hoverState.hoveredEl === 'connect' && (
                      <div
                        className="cards"
                        onMouseLeave={onMouseLeave}
                        ref={outside}
                      >
                        <ul className="card-list">
                          <li className="card-list-item">
                            <a href="#!">About</a>
                          </li>
                          <li className="card-list-item">
                            <a href="#!">Team</a>
                          </li>
                          <li className="card-list-item">
                            <a href="#!">Blog</a>
                          </li>
                          <li className="card-list-item">
                            <a href="#!">Career</a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                  <li
                    className="nav-links-item-left"
                    id="company"
                    onMouseOver={onMouseOver}
                  >
                    <a href="#!">
                      Company <img src="./images/icon-arrow-light.svg" alt="" />
                    </a>
                    {hoverState.hoveredEl === 'company' && (
                      <div
                        className="cards"
                        onMouseLeave={onMouseLeave}
                        ref={outside}
                      >
                        <ul className="card-list">
                          <li className="card-list-item">
                            <a href="#!">Contact</a>
                          </li>
                          <li className="card-list-item">
                            <a href="#!">Newsletter</a>
                          </li>
                          <li className="card-list-item">
                            <a href="#!">LinkedIn</a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
              </ul>
            )}
            {width > 947 ? (
              <ul className="nav-links-right">
                <li className="nav-links-item-right">
                  <a href="#!">Login</a>
                </li>
                <li className="nav-links-item-right">
                  <button className="btn btn-light">Sign Up</button>
                </li>
              </ul>
            ) : (
              <button
                className="hamburger-btn"
                onClick={() => {
                  handleMenuShow()
                }}
              >
                <img
                  src={
                    !menu
                      ? '/images/icon-hamburger.svg'
                      : '/images/icon-close.svg'
                  }
                  alt="X"
                />
              </button>
            )}
          </nav>

          
          <div className="header-header">
            <p className="header-title">A modern publishing platform</p>
            <p className="paragraph">
              Grow your audience and build your online brand
            </p>
          </div>

          <div className="button-container">
            <button className="btn btn-light">Start for Free</button>
            <button className="btn btn-white">Learn More</button>
          </div>
        </HeaderContainer>
      </HeaderSection>
    </Fragment>
  )
}

export default Header
