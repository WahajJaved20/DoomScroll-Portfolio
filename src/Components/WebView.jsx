import { Grid } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";
import PersonalInformation from "./HomePage/PersonalInformation";
import Projects from "./Projects";
import Experience from "./Experience";

function WebView() {
    return <>
        <Grid container className="">
            <Grid item xs={3} className="h-screen pl-8 pt-16">
                <Sidebar />
            </Grid>
            <Grid item xs={9} className="h-screen pt-24" >
                <PersonalInformation />
                {/* <Projects /> */}
                <Experience />
            </Grid>
        </Grid>
    </>
}

export default WebView;