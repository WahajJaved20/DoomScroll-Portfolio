import React from "react";
import PersonalInformation from "./HomePage/PersonalInformation";
import Projects from "./Projects";

function MobileView(){
    return <div>
        <h1 className="font-Billabong text-white font-bold text-5xl hover:text-sidebarText
        flex justify-center items-center m-8">{"< Wahaj Javed />"}</h1>
        <PersonalInformation />
        <Projects />
    </div>
}
export default MobileView;