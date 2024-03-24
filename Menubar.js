import React from "react";
import { Link } from "react-router-dom";
const Menubar =()=>{
    return <>
    <div className="card text-white bg-danger mb-3 text-center">
       <Link to="/about">About</Link>
       <Link to="/services"> Services</Link>
       <Link to="/ipltable"> IPLtable</Link>
    </div>
    </>
}

export default Menubar; 