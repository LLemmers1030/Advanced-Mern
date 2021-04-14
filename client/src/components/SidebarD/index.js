import "./sidebar.css";
import {useState, useEffect} from 'react';
import logo from "../../images/house.png";
import { useHistory, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserEdit,
  faTimes,
  faTools,
  faPhoneAlt,
  faPowerOff,
  faHouseUser,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

{/* function Sidebar(props, { sidebarOpen, closeSidebar }) { */ }
const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  let history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    // or /login
    history.push("/");
  }

  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1 className="sidebar_heading">Jack Mobile Home Park</h1>
        </div>
        <FontAwesomeIcon
          icon={faTimes}
          id="sidebarIcon"
          onClick={() => closeSidebar()}
        />
      </div>

      <div className="sidebar__menu">
        <NavLink to="/dashboard" className="sidebar__link" activeClassName="active_menu_link" exact={true}>
          <FontAwesomeIcon icon={faHouseUser} />
          <p>Dashboard</p>
        </NavLink>
        <h2>UTILITIES</h2>
        <NavLink to="/dashboard/maintenance" className="sidebar__link" activeClassName="active_menu_link" >
          <FontAwesomeIcon icon={faTools} />
          <p>Maintenance Request</p>
        </NavLink>
        <h2>EXTRA</h2>
        <NavLink to="/dashboard/settings" className="sidebar__link" activeClassName="active_menu_link">
          <FontAwesomeIcon icon={faUserEdit} />
          <p>User Settings</p>
        </NavLink>
        <NavLink to="/dashboard/contact" className="sidebar__link" activeClassName="active_menu_link">
          <FontAwesomeIcon icon={faPhoneAlt} />
          <p>Contact Us</p>
        </NavLink>
        {/* need to actually log user out */}
        <button onClick={logoutHandler} className="sidebar__logout">
          <FontAwesomeIcon icon={faPowerOff} />
          <p>Logout</p>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
