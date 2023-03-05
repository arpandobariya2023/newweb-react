import React from 'react'

const Header = () => {
  return (
    <div>
      <header className="header axil-header header-style-1">
        <div className="axil-mainmenu axil-sticky">
          <div className="container">
            <div className="row">
              <div className="logo">
                <a href="index.html"><img src="image/logo.svg" alt="logo" /></a>
              </div>
              <nav>
                <ul className="menu">
                  <li className="dropdown">
                    <a href="javascript:void(0)" className="topper subtoper-1">Digital Agency <i className="fa-solid fa-angle-down" />
                    </a><ul className="submenu submenu-1"><a href="javascript:void(0)" className="topper subtoper-1">
                    </a><li><a href="javascript:void(0)" className="topper subtoper-1" /><a href="index.html">Digital Agency</a></li>
                      <li><a href="javascript:void(0)">Creative Agency</a></li>
                      <li><a href="javascript:void(0)">Personal Portfolio</a></li>
                      <li><a href="javascript:void(0)">Home Startup</a></li>
                      <li><a href="javascript:void(0)">Corporate Agency</a></li>
                      <li><a href="javascript:void(0)">RTL Demo</a></li>
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
                      <li><a href="javascript:void(0)">Portfolio Details</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="javascript:void(0)" className="topper subtoper-4">Pages <i className="fa-solid fa-angle-down" />
                    </a><ul className="submenu submenu-4"><a href="javascript:void(0)" className="topper subtoper-4">
                    </a><li><a href="javascript:void(0)" className="topper subtoper-4" /><a href="javascript:void(0)">About Us</a></li>
                      <li><a href="javascript:void(0)">Our Office</a></li>
                      <li><a href="javascript:void(0)">Case Study</a></li>
                      <li><a href="javascript:void(0)">Case Study Details</a></li>
                      <li><a href="pages.html">Team</a></li>
                      <li><a href="javascript:void(0)">Team Details</a></li>
                      <li><a href="javascript:void(0)">Our Clients</a></li>
                      <li><a href="javascript:void(0)">Testimonial</a></li>
                      <li><a href="javascript:void(0)">Pricing Table</a></li>
                      <li><a href="javascript:void(0)">Typography</a></li>
                      <li><a href="javascript:void(0)">404 Page</a></li>
                      <li><a href="javascript:void(0)">Coming Soon</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="javascript:void(0)" className="topper subtoper-5">Blog <i className="fa-solid fa-angle-down" />
                    </a><ul className="submenu submenu-5"><a href="javascript:void(0)" className="topper subtoper-5">
                    </a><li><a href="javascript:void(0)" className="topper subtoper-5" /><a href="blog.html">Blog</a></li>
                      <li><a href="javascript:void(0)">Standard Post</a></li>
                      <li><a href="javascript:void(0)">Gallery Post</a></li>
                      <li><a href="javascript:void(0)">Video Post</a></li>
                    </ul>
                  </li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
                <div className="menu-bar">
                  <a href="javascript:void(0)"><i className="fa-solid fa-bars-staggered" /></a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
