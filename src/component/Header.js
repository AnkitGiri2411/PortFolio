import React from 'react'
import { Link } from 'react-router-dom';
import App from '../App';
import '../App.css'
import Imagge from '../image/Ankitgiri.jpg';
import Pro from './Project'


export default function Header() {

     
    
  return (
    <>
    <div>
        
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
   
  <h1>Ankit Giri</h1>
  <div >
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
        </li>&nbsp;
        <li className="nav-item">
          <Link className="nav-link" to="about" >About</Link>
        </li>&nbsp;
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="./Project" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="https://github.com/AnkitGiri2411/Todo-List-Project">Todo-List-Project</a></li>
            <li><a className="dropdown-item" href="https://github.com/AnkitGiri2411/Student-Management-System-Project/tree/master">Student-Management-System-Project</a></li>
            <li><a className="dropdown-item" href="https://github.com/AnkitGiri2411/StickyNotes">StickyNotes </a></li>
            <li><a className="dropdown-item" href="SyncProject ">SyncProject</a></li>
            
          </ul>
        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
      </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
    
    </>
  )
}
