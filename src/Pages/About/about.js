import React from "react";

import TemplatePage from "../template";
import {OtherSidebarData} from "../../Menu/sidebar_data";

import {Jumbotron} from "react-bootstrap";

class About extends React.Component {
    render() {
        return (
            <TemplatePage
                layers={Array(0)}
                pages={OtherSidebarData.slice(1, 2)}>
                <div style={{minHeight: "100vh"}}>
                    <div style={{
                        width: "100%",
                        height: "230px",
                        backgroundColor: "black",
                        opacity: 0.5,
                        position: "absolute",
                        top: 56
                    }}/>
                    <Jumbotron style={{
                        backgroundImage: `url(${'./utah.jpg'})`,
                        backgroundSize: 'cover',
                        height: "230px"
                    }}/>
                    <div className="container" style={{position: "absolute", top: "70px", left: "2em"}}>
                        <h3 className="row" style={{paddingLeft: "15px", paddingTop: "15px", color: "white"}}>Service
                            Not Available</h3>
                        <div className="row">
                            <div className="col-lg-5 col-md-8" style={{color: "white"}}>
                                Seems like the connection to the server is not established.<br/>
                                Make sure you followed server deployment instructions .<br/><br/>
                                If you faced problems during server deployment, feel free to <a href="/contacts" style={{color: "white", textDecoration: "underline"}}>contact us</a> to get help.
                            </div>
                        </div>
                    </div>
                </div>
            </TemplatePage>
        );
    }
}

export default About;
