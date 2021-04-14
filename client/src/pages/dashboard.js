import React, { useState } from "react";
import Navbar from "../components/NavbarD";
import Sidebar from "../components/SidebarD";

{/* function UserDashboard(props) { */ }
const UserDashboard = (props) => {
  const [sidebarOpen, setsidebarOpen] = useState(false);

  const openSidebar = () => {
    setsidebarOpen(true);
  };

  const closeSidebar = () => {
    setsidebarOpen(false);
  };

  return (
    <div className="containerDash">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      {props.children}
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} props={props} />
    </div>
  );
};

export default UserDashboard;
