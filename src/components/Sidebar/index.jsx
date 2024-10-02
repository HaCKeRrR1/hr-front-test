import React from "react";
import { BiHelpCircle } from "react-icons/bi";
import { FiCheck  } from "react-icons/fi";
import { GiFairyWings } from "react-icons/gi";
import '../../styles/sidebar.css'
import { NavLink } from "react-router-dom";

const App = () => {

  return (
    <div className="menu">
        <div className="logo">
          <GiFairyWings className="logo-icon" />
          <h2>A4AI</h2>
        </div>
        
        <div className="menu--list">
          <NavLink exact to="/" className="item ">
            <FiCheck className="icon"/>
            Dashboard
          </NavLink>
          <NavLink to="/message" className="item ">
            <FiCheck className="icon"/>
            Message
          </NavLink>
          <NavLink to="/report" className="item ">
            <FiCheck className="icon"/>
            Report
          </NavLink>
          <NavLink to="/stats" className="item ">
            <FiCheck className="icon"/>
            Stats
          </NavLink>
          <NavLink to="/task" className="item ">
            <FiCheck className="icon"/>
            Task
          </NavLink>
        </div>
    </div>
  );
};

export default App;
