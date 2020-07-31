import React from "react";

const Sidebar = ({children}) => {
    return (
      <div className="SidebarSection">
        <div className="SidebarContainer">
            {children}
        </div>            
      </div>
    );
}

export default Sidebar;