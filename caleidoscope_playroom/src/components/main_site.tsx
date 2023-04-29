import React from "react";
import { Navbar } from "./nav";
import { Footer } from "./footer";
type Container={
    children: React.ReactNode}
export function Mainsite(props:Container){ {
}
return(

<div className="mainsite"> {props.children}
<div className="caledoscopeimg"><img src="caleidoscope_playroom/public/kalejdoskop.jpg"></img></div>
</div>

    );
}