import { Avatar, Divider, Grid, Stack } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";
import { profilePicture, verifiedBadge } from "../assets";
import { githubStats } from "../Constants/githubStats";

function HomePage() {
    return <>
        <Grid container className="">
            <Grid item xs={3} className="h-screen pl-8 pt-16">
                <Sidebar />
            </Grid>

            <Grid item xs={9} className="h-screen pl-8 pt-24" >
                <Grid container sx={{ alignItems: "center", paddingLeft: "20px" }} direction={"row"}>
                    <Grid item xs={3} >
                        <Avatar src={profilePicture} className="innerAvatar " sx={{ height: "180px", width: "180px" }} />
                    </Grid>
                    <Grid container xs={6} sx={{ alignItems: "center" }}>
                        <Grid container direction={"row"} sx={{ alignItems: "center" }} spacing={1} >
                            <Grid item>
                                <h1 className="font-InstagramSansBold text-2xl text-white">Wahaj Javed</h1>
                            </Grid>
                            <Grid item>
                                <img src={verifiedBadge} />
                            </Grid>
                            <Grid item>
                                <button className="text-white font-InstagramSansBold bg-verifiedBlue px-2 rounded-md">Following 🔥</button>
                            </Grid>
                            <Grid item>
                                <button className="text-white font-InstagramSansBold bg-verifiedRed px-2 rounded-md">Going Super Saiyan 😶‍🌫️</button>
                            </Grid>
                        </Grid>
                        <Grid container direction={"row"} sx={{ alignItems: "center", marginTop: "20px", alignContent:"center" }} >
                            <Stack   direction={"row"} sx={{ alignItems: "center" }}>
                                    <h1 className="font-InstagramSansBold font-bold text-xl text-white">{githubStats.followers}</h1>
                                    <h1 className="font-InstagramSansBold text-lg text-white ml-2">Followers</h1>
                            </Stack>
                            <Stack  direction={"row"} sx={{ alignItems: "center", marginLeft:"30px"}}>
                                    <h1 className="font-InstagramSansBold font-bold text-xl text-white">{githubStats.stars}</h1>
                                    <h1 className="font-InstagramSansBold text-lg text-white ml-2">Stars</h1>
                            </Stack>
                            <Stack  direction={"row"} sx={{ alignItems: "center", marginLeft:"30px"}}>
                                    <h1 className="font-InstagramSansBold font-bold text-xl text-white">{githubStats.pullRequests}</h1>
                                    <h1 className="font-InstagramSansBold text-lg text-white ml-2">Pull Requests</h1>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>
}
export default HomePage;