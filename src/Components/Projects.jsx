import { Avatar, Divider } from "@mui/material";
import React from "react";
import { heart, ivms, profilePicture, verifiedBadge, comment, share, save } from "../assets";

function Projects() {
    return <div>
        <h1 className="font-Billabong text-white font-bold text-5xl hover:text-sidebarText
                    flex justify-center items-center m-8">{"< Projects />"}</h1>
        <div className="flex font-InstagramSansBold flex-col justify-center items-center mb-16">
            <div className="flex flex-col mt-4 bg-[#ffffff] w-5/6 ">
                <div id="topbar" className="ml-4 my-4 items-center flex flex-row">
                    <Avatar src={profilePicture} />
                    <p className="ml-2">Wahaj Javed</p>
                    <Avatar src={verifiedBadge} sx={{ width: "20px", height: "20px" }} />
                    <p>&nbsp;&nbsp;{"."}</p>
                    <p>&nbsp;&nbsp;Iss din Banaya tha heeh</p>
                </div>
                <div id="imageArea">
                    <img src={ivms} className="w-full" />
                </div>
                <div id="actionButtons " className="flex flex-row h-8 my-2 justify-between">
                    <div className="flex flex-row">
                        <img src={heart} className="h-4 md:h-8 mx-2 md:mx-4" />
                        <img src={comment} className="h-4 md:h-8 mr-2" />
                        <img src={share} className="h-4 md:h-8 mr-2" />
                    </div>
                    <img src={save} className="h-4 md:h-8 mx-4" />
                </div>
                <div id="likesBox">
                    <p className="ml-4">XXX likes</p>
                </div>
                <div id="description" className="ml-4 flex font-InstagramSans">
                    <p>
                        <span style={{ fontWeight: 'bold' }}>{"Wahaj Javed -"}</span> A PERN-stack web application for inventory management allowing users to efficiently manage their inventory, orders and customers
                    </p>
                </div>
                <hr className="my-4 mx-4 border-gray-800" />
            </div>
        </div>
        <div className="h-16"></div>
    </div>
}
export default Projects;