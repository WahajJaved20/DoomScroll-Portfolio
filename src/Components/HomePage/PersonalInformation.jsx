import React from "react";
import { profilePicture, verifiedBadge } from "../../assets";
import { githubStats } from "../../Constants/githubStats";
import Typewriter from "typewriter-effect";

function PersonalInformation() {
    return (
        <div className="flex flex-col md:flex-row justify-center">  
            <div className="flex justify-center mr-0 md:mr-16"> 
                <img
                    src={profilePicture}
                    className="rounded-full innerAvatar h-36 w-36 md:h-48 md:w-56 lg:h-56 lg:w-72 "
                    alt="Profile picture"
                />
            </div>
            <div className="flex flex-col justify-center w-full mt-8">
                <div className="flex items-center justify-center md:justify-start">
                    <h1 className="font-InstagramSansBold text-xl lg:text-2xl text-white">
                        Wahaj Javed
                    </h1>
                    <img src={verifiedBadge} alt="Verified Badge" />
                    <button className="ml-4 text-white font-InstagramSansBold bg-verifiedBlue px-2 rounded-md">
                        Following
                    </button>
                    <button className="ml-4 text-white font-InstagramSansBold bg-verifiedRed px-2 rounded-md">
                        Going Super Saiyan
                    </button>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start">
                    <div className="flex items-center space-x-2 mt-4 mr-4">
                        <h1 className="font-InstagramSansBold text-lg lg:text-xl text-white">
                            {githubStats.followers}
                        </h1>
                        <h1 className="font-InstagramSansBold text-md lg:text-lg text-white ml-2">
                            Followers
                        </h1>
                    </div>
                    <div className="flex items-center space-x-2 mt-4 mr-4"> 
                        <h1 className="font-InstagramSansBold text-lg lg:text-xl text-white">
                            {githubStats.stars}
                        </h1>
                        <h1 className="font-InstagramSansBold text-md lg:text-lg text-white ml-2">
                            Stars
                        </h1>
                    </div>
                    <div className="flex items-center space-x-2 mt-4"> 
                        <h1 className="font-InstagramSansBold text-lg lg:text-xl text-white">
                            {githubStats.pullRequests}
                        </h1>
                        <h1 className="font-InstagramSansBold text-md lg:text-lg text-white ml-2">
                            Pull Requests
                        </h1>
                    </div>
                </div>
                <div className="mt-4 flex flex-row items-center justify-center md:justify-start">
                    <div className="text-verifiedBlue font-bold text-lg lg:text-xl ">
                        <Typewriter
                            className="text-white"
                            options={{
                                loop: true,
                            }}
                            onInit={(typewriter) =>
                                typewriter
                                    .typeString("Guess we both like to DoomScroll huh???")
                                    .pauseFor(1000)
                                    .start()
                            }
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PersonalInformation;