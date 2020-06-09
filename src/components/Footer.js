import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import linkedin from '../img/social/linkedin.svg'
import email from '../img/social/email.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="caslify"
            style={{ width: '15em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Services
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/Caslify" target="_blank" rel="noopener noreferrer">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                {
                //<a title="instagram" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                 // <img
                 //   src={instagram}
                 //   alt="Instagram"
                  //  style={{ width: '1em', height: '1em' }}
                 // />
               // </a>
                }
                <a title="linkedin" href="https://www.linkedin.com/company/caslify/" target="_blank" rel="noopener noreferrer">
                  <img
                    src={linkedin}
                    alt="linkedin"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="email" href="mailto:info@caslify.com.ng">
                
                  <img 
                    src={email}
                    alt="email"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="content has-text-centered"
        style={{
          fontSize: '10px',
        }}
        >
          <p>©2020 Caslify. Copyright All rights reserved.</p>
        </div>
      </footer>
    )
  }
}

export default Footer