import React, { useState } from "react";
import { Stack, Divider } from "@mui/material";
import { certificate, certificateHover, code, codeHover, globe, globeHover, social, socialHover } from "../assets";

function Sidebar() {
    const [projectIcon, setProjectIcon] = useState(code);
    const [experienceIcon, setExperienceIcon] = useState(globe);
    const [certificateIcon, setCertificateIcon] = useState(certificate)
    const [socialIcon, setSocialIcon] = useState(social);
    return <>
        <h1 className="font-Billabong text-white font-bold text-5xl hover:text-sidebarText">{"< Wahaj Javed />"}</h1>
        <Stack
            direction="column"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            className="text-white mt-16"
        >
            <Stack direction="row" sx={{ alignContent: "center", alignItems: "center" }} className="hover:text-sidebarText"
                onMouseEnter={() => { setProjectIcon(codeHover) }} onMouseLeave={() => { setProjectIcon(code) }}
            >
                <img src={projectIcon} className="h-12 w-12 mr-4" ></img>
                <h1 className="font-InstagramSansBold text-2xl hover:shadow-lg">Projects</h1>

            </Stack>
            <Stack direction="row" sx={{ alignContent: "center", alignItems: "center" }} className="hover:text-sidebarText"
                onMouseEnter={() => { setExperienceIcon(globeHover) }} onMouseLeave={() => { setExperienceIcon(globe) }}
            >
                <img src={experienceIcon} className="h-10 w-10 mr-4" ></img>
                <h1 className="font-InstagramSansBold text-2xl hover:shadow-lg">Experience</h1>

            </Stack>
            <Stack direction="row" sx={{ alignContent: "center", alignItems: "center" }} className="hover:text-sidebarText"
                onMouseEnter={() => { setCertificateIcon(certificateHover) }} onMouseLeave={() => { setCertificateIcon(certificate) }}
            >
                <img src={certificateIcon} className="h-10 w-10 mr-4" ></img>
                <h1 className="font-InstagramSansBold text-2xl hover:shadow-lg">Certifications</h1>

            </Stack>
            <Stack direction="row" sx={{ alignContent: "center", alignItems: "center" }} className="hover:text-sidebarText"
                onMouseEnter={() => { setSocialIcon(socialHover) }} onMouseLeave={() => { setSocialIcon(social) }}
            >
                <img src={socialIcon} className="h-10 w-10 mr-4" ></img>
                <h1 className="font-InstagramSansBold text-2xl hover:shadow-lg">Socials</h1>

            </Stack>
            
        </Stack>
    </>
}
export default Sidebar;