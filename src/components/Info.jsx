import React from "react";

const Info = ({children}) => {
    return (
        <div className="Info">
            <div className="Infocontainer">
                {children}
            </div>
        </div>
    );
}

export default Info;