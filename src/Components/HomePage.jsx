import React from "react";
import WebView from "./WebView";
import MobileView from "./MobileView";

function HomePage() {
    return <div>
        <div className="hidden md:block">
            <WebView />
        </div>
        <div className="block md:hidden">
            <MobileView />
        </div>
    </div>
}
export default HomePage;