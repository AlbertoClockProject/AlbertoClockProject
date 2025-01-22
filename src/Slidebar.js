import React from "react";
import "./App.css";
import Main from './Main'
import Vintage from './Vintage'
import Smart from './Smart'


function Slidebar() {
  return (
    <div className="d-flex">
      <nav className="text-dark sidebar flex-shrink-1">
        <ul className=" nav bg-light  flex-column">
          <li className="nav-item mt-4">
            <a className="nav-link slider-fonts text-dark fw-bold" href="#link1">
              Availability
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link slider-fonts text-dark" href="#link2">
              In stock
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link slider-fonts text-dark" href="#link3">
              Out stock
            </a>
          </li>

          <li className="nav-item mt-4">
            <a className="nav-link slider-fonts text-dark fw-bold" href="#link1">
              Brands
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link slider-fonts text-dark" href="#link2">
              Seiko
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link slider-fonts text-dark" href="#link3">
            Rhythm
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link slider-fonts text-dark" href="#link3">
            Howard Miller
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link slider-fonts text-dark" href="#link3">
            Seth Thomas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link slider-fonts text-dark" href="#link3">
            Quartz
            </a>
          </li>

          <li className="nav-item mt-4">
            <a className="nav-link slider-fonts text-dark fw-bold" href="#link1">
              Technology & Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link slider-fonts text-dark" href="#link2">
              Wi-Fi Clocks
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link slider-fonts text-dark" href="#link3">
              Voice-Controlled Clocks
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link slider-fonts text-dark" href="#link3" style={{ whiteSpace: "normal" }}>
              Bluetooth-Enabled Clocks
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link slider-fonts text-dark" href="#link3" style={{ whiteSpace: "normal" }}>
              Solar powered Clocks
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link slider-fonts text-dark" href="#link3" style={{ whiteSpace: "normal" }}>
              LED Clocks
            </a>
          </li>

          <li className="nav-item mt-4">
            <a className="nav-link slider-fonts text-dark fw-bold" href="#link1">
              Filter By
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link slider-fonts text-dark" href="#link2">
              Color
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link slider-fonts text-dark" href="#link2">
              Design
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link slider-fonts text-dark" href="#link2">
              Material
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link slider-fonts text-dark" href="#link2">
              Price Range
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link slider-fonts text-dark" href="#link2">
            Popularity
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link slider-fonts text-dark" href="#link2">
            By Rating
            </a>
          </li>

        </ul>
        
      </nav>
      <div className="flex-grow-1">
        <Main />
        <Vintage/>
        <Smart/>
      </div>
    </div>
      
  );
}

export default Slidebar;