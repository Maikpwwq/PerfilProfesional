import React from "react";

const Info = ({children}) => {
    return (
        <div className="InfoSection">
            <div className="InfoContainer">
                {children}
            </div>
        </div>
    );
}

export default Info;