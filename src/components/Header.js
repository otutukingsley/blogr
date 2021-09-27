import React, { Fragment } from 'react'
import { HeaderSection, HeaderContainer } from './styles/themes'

const Header = () => {
  return (
    <Fragment>
      <HeaderSection>
        <HeaderContainer>
          <nav className="nav-bar">
            <div className="img-container">
              <img src="./images/logo.svg" alt="" />
            </div>
            <ul className="nav-links-left">
              <li className="nav-links-item-left">
                <a href="#!">
                  Product <img src="./images/icon-arrow-light.svg" alt="" />
                </a>
              </li>
              <li className="nav-links-item-left">
                <a href="#!">
                  Connect <img src="./images/icon-arrow-light.svg" alt="" />
                </a>
              </li>
              <li className="nav-links-item-left">
                <a href="#!">
                  Company <img src="./images/icon-arrow-light.svg" alt="" />
                </a>
              </li>
            </ul>
            <ul className="nav-links-right">
              <li className="nav-links-item-right">
                <a href="#!">Login</a>
              </li>
              <li className="nav-links-item-right">
                <button className="btn btn-light">Sign Up</button>
              </li>
            </ul>
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
