import React from "react";
import DSC from "../images/DSC.jpg"
import Typography from '@material-ui/core/Typography';

function Home() {

    const isMobile = () => /Mobi|Android/i.test(navigator.userAgent)

    const homeDesktop = (
        <div className="bodyDiv-home">
            <div className="container-home">
                <div className="home-image">
                    <img id="dsc-home" src={DSC} alt="DSC-avatar"></img>
                </div>
                <div className="home-text">
                    <Typography variant="h2"> Daniel Scott Cole </Typography>
                    <Typography style={{ color: "rgba(191,191,191,1)" }} variant="h4">I'm a software engineer with experience in Javascript and Ruby frameworks.</Typography>
                    <Typography style={{ color: "rgba(191,191,191,1)" }} variant="h4">I hope you enjoy checking out my website and portfolio.</Typography>
                    <div className="home-bottom-text">
                        <Typography style={{ color: "rgba(255,100,0,1)" }} variant="h4">I built this website using React.js.</Typography>
                    </div>
                </div>
            </div>
        </div>
    )

    const homeMobileVert = (
        <div className="bodyDiv-home-mobile-vert">
            <div className="container-home">
                <div className="home-image">
                    <img id="dsc-home" src={DSC} alt="DSC-avatar"></img>
                </div>
                <div className="home-text">
                    <Typography variant="h2"> Daniel Scott Cole </Typography>
                    <Typography style={{ color: "rgba(191,191,191,1)" }} variant="h4">I'm a software engineer with experience in Javascript and Ruby frameworks.</Typography>
                    <Typography style={{ color: "rgba(191,191,191,1)" }} variant="h4">I hope you enjoy checking out my website and portfolio.</Typography>
                    <div className="home-bottom-text">
                        <Typography style={{ color: "rgba(255,100,0,1)" }} variant="h4">I built this website using React.js.</Typography>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div>
            {isMobile() === false ? homeDesktop : homeMobileVert}
        </div>
    )
}

export default Home;