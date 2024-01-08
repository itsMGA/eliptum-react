import React, { useState, useEffect } from "react";

import LogoSVG from './logo.js';
import { toggleTheme } from './theme.js'; 

const Navbar = ({ setSelectedOption, handleNavbarHover, handleNavbarLeave, isNavbarExpanded}) => {  

    return (
      <>
    <nav className={isNavbarExpanded ? "navbar expanded" : "navbar"} onMouseEnter={handleNavbarHover} onMouseLeave={handleNavbarLeave}>        
      <ul className="navbar-nav">
          <li className="logo">
            <a href="#" className="nav-link">
              <span className="link-text logo-text">Eliptum-Tech</span>
              <LogoSVG />
            </a>
          </li>
          <li className="nav-item" id='home' onClick={() => setSelectedOption("home")}>
            <a href="#" className="nav-link" name="home">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="home"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="svg-inline--fa fa-cat fa-w-16 fa-9x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                    className="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                    className="fa-primary"
                  ></path>
                </g>
              </svg>
              <span className="link-text">Home</span>
            </a>
          </li>
          <li className="nav-item" id='products' onClick={() => setSelectedOption("products")}>
            <a href="#" className="nav-link">
            <svg                
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="products"
                role="img"
                className="svg-inline--fa fa-automate fa-w-18 fa-9x"
                xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px"
              >
              <g data-name="Group">
                <path className="fa-secondary" fill="currentColor" data-name="Compound Path" d="M41.1,38.9a5,5,0,0,0,5-5V13.1a5,5,0,0,0-5-5H7.3a5,5,0,0,0-5,5V33.9a5,5,0,0,0,5,5H21.2v2.5H16.4a3,3,0,0,0,0,6H32.1a3,3,0,0,0,0-6H27.2V38.9Zm-32.8-6V14.1H40.1V32.9H8.3Z"/>
                <path className="fa-primary" fill="currentColor" data-name="Compound Path" d="M41.1,38.9a5,5,0,0,0,5-5V13.1a5,5,0,0,0-5-5H7.3a5,5,0,0,0-5,5V33.9a5,5,0,0,0,5,5H21.2v2.5H16.4a3,3,0,0,0,0,6H32.1a3,3,0,0,0,0-6H27.2V38.9Zm-32.8-6V14.1H40.1V32.9H8.3Z"/>
                
                <path className="fa-secondary" fill="currentColor" data-name="Compound Path" d="M86.2,73.9a12.6,12.6,0,1,0-16.8,0,19.9,19.9,0,0,0-11.5,18v1.7a3,3,0,0,0,3,3H94.7a3,3,0,0,0,3-3V91.9A19.9,19.9,0,0,0,86.2,73.9Zm-8.4-16a6.6,6.6,0,1,1-6.6,6.6A6.6,6.6,0,0,1,77.8,57.9ZM64,90.5a13.9,13.9,0,0,1,27.6,0Z"/>
                <path className="fa-primary" fill="currentColor" data-name="Compound Path" d="M86.2,73.9a12.6,12.6,0,1,0-16.8,0,19.9,19.9,0,0,0-11.5,18v1.7a3,3,0,0,0,3,3H94.7a3,3,0,0,0,3-3V91.9A19.9,19.9,0,0,0,86.2,73.9Zm-8.4-16a6.6,6.6,0,1,1-6.6,6.6A6.6,6.6,0,0,1,77.8,57.9ZM64,90.5a13.9,13.9,0,0,1,27.6,0Z"/>
                
                <path fill="currentColor" data-name="Path" d="M69.4,2.7a3,3,0,0,0-4.2,0L53,14.9l-.4.5v.2l-.2.3v.6a3,3,0,0,0-.1.6h0a3,3,0,0,0,.1.6v.6l.2.3v.2l.4.5L65.2,31.3A3,3,0,0,0,69.4,27l-7-7H80.1a5,5,0,0,1,5,5V45a3,3,0,0,0,6,0V25a11,11,0,0,0-11-11H62.4l7-7A3,3,0,0,0,69.4,2.7Z"/>
                
                <path fill="currentColor" data-name="Path" d="M47.6,84.7h.1l.2-.4v-.6a3,3,0,0,0,0-1.2v-.6l-.2-.4h-.1l-.4-.5L35.1,68.7A3,3,0,0,0,30.8,73l7,7H20.1a5,5,0,0,1-5-5V55a3,3,0,0,0-6,0V75a11,11,0,0,0,11,11H37.9l-7,7a3,3,0,1,0,4.2,4.2L47.2,85.1Z"/>
              </g>
            </svg>
              <span className="link-text">Let's Automate</span>
            </a>
          </li>
          <li className="nav-item" id='shop' onClick={() => setSelectedOption("shop")}>
            <a href="#" className="nav-link">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="shopping"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="svg-inline--fa fa-shopping fa-w-16 fa-5x"
              >
                <g>
                  <path
                  fill="currentColor"
                  className="fa-secondary"
                  d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                  <path
                  fill="currentColor" 
                  className="fa-primary"
                  d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                </g>
              </svg>
              <span className="link-text">Shopping Cart</span>
            </a>
          </li>
          <li className="nav-item" id='contact' onClick={() => setSelectedOption("contact")}>
            <a href="#" className="nav-link">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="contact"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-contact fa-w-20 fa-5x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M384 48c8.8 0 16 7.2 16 16V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H384zM96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM240 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H208zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"                    className="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M384 48c8.8 0 16 7.2 16 16V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H384zM96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM240 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H208zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"                    className="fa-primary"
                  ></path>
                </g>
              </svg>
              <span className="link-text">Contact</span>
            </a>
          </li>
          <li className="nav-item" id="themeButton" onClick={() => toggleTheme()}>
            <a href="#" className="nav-link">
              <svg
                id="lightIcon"
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="moon-stars"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="theme-icon svg-inline--fa fa-moon-stars fa-w-16 fa-7x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z"
                    className="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z"
                    className="fa-primary"
                  ></path>
                </g>
              </svg>
              <svg
                id="solarIcon"
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="sun"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="theme-icon svg-inline--fa fa-sun fa-w-16 fa-7x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z"
                    className="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z"
                    className="fa-primary"
                  ></path>
                </g>
              </svg>
              <svg
                id="darkIcon"
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="sunglasses"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="theme-icon svg-inline--fa fa-sunglasses fa-w-18 fa-7x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M574.09 280.38L528.75 98.66a87.94 87.94 0 0 0-113.19-62.14l-15.25 5.08a16 16 0 0 0-10.12 20.25L395.25 77a16 16 0 0 0 20.22 10.13l13.19-4.39c10.87-3.63 23-3.57 33.15 1.73a39.59 39.59 0 0 1 20.38 25.81l38.47 153.83a276.7 276.7 0 0 0-81.22-12.47c-34.75 0-74 7-114.85 26.75h-73.18c-40.85-19.75-80.07-26.75-114.85-26.75a276.75 276.75 0 0 0-81.22 12.45l38.47-153.8a39.61 39.61 0 0 1 20.38-25.82c10.15-5.29 22.28-5.34 33.15-1.73l13.16 4.39A16 16 0 0 0 180.75 77l5.06-15.19a16 16 0 0 0-10.12-20.21l-15.25-5.08A87.95 87.95 0 0 0 47.25 98.65L1.91 280.38A75.35 75.35 0 0 0 0 295.86v70.25C0 429 51.59 480 115.19 480h37.12c60.28 0 110.38-45.94 114.88-105.37l2.93-38.63h35.76l2.93 38.63c4.5 59.43 54.6 105.37 114.88 105.37h37.12C524.41 480 576 429 576 366.13v-70.25a62.67 62.67 0 0 0-1.91-15.5zM203.38 369.8c-2 25.9-24.41 46.2-51.07 46.2h-37.12C87 416 64 393.63 64 366.11v-37.55a217.35 217.35 0 0 1 72.59-12.9 196.51 196.51 0 0 1 69.91 12.9zM512 366.13c0 27.5-23 49.87-51.19 49.87h-37.12c-26.69 0-49.1-20.3-51.07-46.2l-3.12-41.24a196.55 196.55 0 0 1 69.94-12.9A217.41 217.41 0 0 1 512 328.58z"
                    className="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M64.19 367.9c0-.61-.19-1.18-.19-1.8 0 27.53 23 49.9 51.19 49.9h37.12c26.66 0 49.1-20.3 51.07-46.2l3.12-41.24c-14-5.29-28.31-8.38-42.78-10.42zm404-50l-95.83 47.91.3 4c2 25.9 24.38 46.2 51.07 46.2h37.12C489 416 512 393.63 512 366.13v-37.55a227.76 227.76 0 0 0-43.85-10.66z"
                    className="fa-primary"
                  ></path>
                </g>
              </svg>
              <span className="link-text">Themify</span>
            </a>
          </li>
        </ul>
    </nav>
    </>
    )
  }


export default Navbar ;
