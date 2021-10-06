import React from 'react'
import { FooterContainer, FooTer, FooterContent } from './styles/themes'
const Footer = () => {
  return (
    <FooTer>
      <FooterContainer>
        <div className="footer-logo">
          <img src="/images/logo.svg" alt="" />
        </div>
        <FooterContent>
          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#!">About</a>
              </li>
              <li>
                <a href="#!">Team</a>
              </li>
              <li>
                <a href="#!">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Connect</h3>
            <ul>
              <li>
                <a href="#!">Contact</a>
              </li>
              <li>
                <a href="#!">Newsletter</a>
              </li>
              <li>
                <a href="#!">LinkedIn</a>
              </li>
              <li>
                <a href="#!">Careers</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Product</h3>
            <ul>
              <li>
                <a href="#!">Overview</a>
              </li>
              <li>
                <a href="#!">Pricing</a>
              </li>
              <li>
                <a href="#!">Marketplace</a>
              </li>
              <li>
                <a href="#!">Features</a>
              </li>
              <li>
                <a href="#!">Integrations</a>
              </li>
            </ul>
          </div>
        </FooterContent>
      </FooterContainer>
    </FooTer>
  )
}

export default Footer;