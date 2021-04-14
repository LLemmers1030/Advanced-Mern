import "./navbar.css";
import avatar from "../../images/avatar.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="navbar__left">
        <a className="active_link">User Portal</a>
      </div>
      <div className="navbar__right">
        <a>
          <i>Testing Testing</i>
        </a>
        <a>
          <img width="30" src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
