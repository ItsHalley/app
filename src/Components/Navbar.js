import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    
      const [myStyle, setStyle] = useState({color:'black', backgroundColor:'white'}); 
      const [myMode, setMode] = useState('light');   
      const [switerLabel, setLabel] = useState('Enabel DarkMode');     
      const mainWrapper = document.getElementById("root");
      //const modeChangerLabel = document.getElementById("modeChangerLabel");

      const changeModeHandler = () =>{
       // console.log("Change mode handler clicked!")
       if(myStyle.color==='black'){
            setStyle({color:'white', backgroundColor:'black'})
            setMode('dark');
            mainWrapper.style.backgroundColor = "black";
            mainWrapper.style.color = "white";
            setLabel("Enabel LiteMode")
       }else{
            setStyle({color:'black', backgroundColor:'white'})
            setMode('light');
            mainWrapper.style.backgroundColor = "white";
            mainWrapper.style.color = "black";
            setLabel("Enabel DarkMode")
       }
      }
      

  return (
    <>
            <nav className="navbar navbar-expand-lg" style={myStyle} data-bs-theme={myMode}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link disabled">Disabled</Link>
        </li>
      </ul>
      <div className="form-check form-switch">
        <input className="form-check-input" onClick={changeModeHandler}  type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" id='modeChangerLabel' htmlFor="flexSwitchCheckDefault">{switerLabel}</label>
        </div>
    </div>
  </div>
</nav>
    </>
  )
}
