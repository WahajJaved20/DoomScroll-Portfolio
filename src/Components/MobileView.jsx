import React from "react";
import PersonalInformation from "./HomePage/PersonalInformation";

function MobileView(){
    return <div>
        <h1 className="font-Billabong text-white font-bold text-5xl hover:text-sidebarText
        flex justify-center items-center m-8">{"< Wahaj Javed />"}</h1>
        <PersonalInformation />
    </div>
}
export default MobileView;