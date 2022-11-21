import React from 'react'
import { Link } from 'react-router-dom'
import "./style1.css";
import TabelaUsuarios from './UserComponent';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"



export default function Sidebar() {
  return (
		
    <div className="wrapper d-flex align-items-stretch">
    <nav id="sidebar">
        <div className="custom-menu">
            <button type="button" id="sidebarCollapse" className="btn btn-primary">
      <i className="fa fa-bars"></i>
      <span className="sr-only">Toggle Menu</span>
    </button>
</div>
        <div className="p-4">
          <h1><a href="index.html" className="logo">Portfolic <span>Portfolio Agency</span></a></h1>
    <ul className="list-unstyled components mb-5">
      <li className="active">
        <a href="#"><span className="fa fa-home mr-3"></span> Home</a>
      </li>
      <li>
          <a href="#"><span className="fa fa-user mr-3"></span> About</a>
      </li>
      <li>
      <a href="#"><span className="fa fa-briefcase mr-3"></span> Works</a>
      </li>
      <li>
      <a href="#"><span className="fa fa-sticky-note mr-3"></span> Blog</a>
      </li>
      <li>
      <a href="#"><span className="fa fa-suitcase mr-3"></span> Gallery</a>
      </li>
      <li>
      <a href="#"><span className="fa fa-cogs mr-3"></span> Services</a>
      </li>
      <li>
      <a href="#"><span className="fa fa-paper-plane mr-3"></span> Contacts</a>
      </li>
    </ul>

    <div className="mb-5">
                <h3 className="h6 mb-3">Subscribe for newsletter</h3>
                <form action="#" className="subscribe-form">
        <div className="form-group d-flex">
            <div className="icon"><span className="icon-paper-plane"></span></div>
          <input type="text" className="form-control" placeholder="Enter Email Address"/>
        </div>
      </form>
            </div>

    <div className="footer">
    </div>

  </div>
  
</nav>


<div>
</div>
</div>

  )
}
