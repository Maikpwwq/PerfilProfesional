import React from "react";

const Sidebar = ({children}) => {
    return (
      <div className="Sidebar">
        <div className="Sidebarcontainer">
            {children}
        </div>            
      </div>
    );
}

export default Sidebar;