import React from "react";
import wxycLogo from '../assets/wxyc-logo.png';

function Tables() {
    return ( 
    <div className="flex-col">
        <div className="flex-row justify-between items-center ">
            
            <img src={wxycLogo}></img>

            <h2 
            className="text-3xl flex-grow font-verdana-pro font-bold">
                Gargoyle AI
            </h2>

        </div>
    </div>
    )
};

export default Tables