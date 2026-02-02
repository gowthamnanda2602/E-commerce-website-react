import React from "react";
import NavigationLinks from "./NavigationLinks";
import { Outlet } from "react-router-dom";

const RootOutlay = () => {
    
    return(
        <>
        <NavigationLinks/>
        <Outlet/>
        </>
    )
}

export default RootOutlay;