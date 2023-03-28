import { Button } from 'react-bootstrap';
import React from 'react';
import {useNavigate} from "react-router-dom"

const Header = () => {
  const navigate = useNavigate();
  const onClickLogin = () => {
    navigate('/')
  }
  return (
    <div>
      <header className="header axil-header header-style-1">
        <div className="axil-mainmenu axil-sticky">
          <div className="container">
            <div className="row">
              <div className="logo">
                <a><img src="image/logo.svg" alt="logo" /></a>
              </div>
              <nav>
                <ul className="menu">
                  <li className="dropdown">
                    <a href="javascript:void(0)" className="topper subtoper-1">Digital Agency <i className="fa-solid fa-angle-down" />
                    </a><ul className="submenu submenu-1"><a href="javascript:void(0)" className="topper subtoper-1">
                    </a><li><a href="javascript:void(0)" className="topper subtoper-1" /><a href="index.html">Digital Agency</a></li>
                      
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="javascript:void(0)" className="topper subtoper-2">Services <i className="fa-solid fa-angle-down" />
                    </a><ul className="submenu submenu-2"><a href="javascript:void(0)" className="topper subtoper-2">
                    </a><li><a href="javascript:void(0)" className="topper subtoper-2" /><a href="javascript:void(0)">Services</a></li>
                      <li><a href="services.html">Service Two</a></li>
                      <li><a href="javascript:void(0)">Service Details</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="javascript:void(0)" className="topper subtoper-3">Portfolio <i className="fa-solid fa-angle-down" />
                    </a><ul className="submenu submenu-3"><a href="javascript:void(0)" className="topper subtoper-3">
                    </a><li><a href="javascript:void(0)" className="topper subtoper-3" /><a href="javascript:void(0)">Two Column</a></li>
                      <li><a href="javascript:void(0)">Three Column</a></li>
                      <li><a href="javascript:void(0)">Four Column</a></li>
                      <li><a href="portfolio.html">Three Column Width</a></li>
                      <li><a href="javascript:void(0)">Four Column Width</a></li>
                      
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="javascript:void(0)" className="topper subtoper-4">Pages <i className="fa-solid fa-angle-down" />
                    </a>
                  </li>
                  <li className="dropdown">
                    <a href="javascript:void(0)" className="topper subtoper-5">Blog <i className="fa-solid fa-angle-down" />
                    </a>
                  </li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
                
                  <Button variant="primary"type='button ' className='h-25' onClick={onClickLogin}>Login</Button>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
