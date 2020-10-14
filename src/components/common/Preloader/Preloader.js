import React from "react";
import preloader from "./../../../asets/images/preloader.svg";

let Preloader = () => {
    return <div style={ {backgroundColor: 'white'} }>
            <img src={preloader}/>
    </div>

}

export default Preloader;