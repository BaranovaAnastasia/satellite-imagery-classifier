import React from "react";

import TemplatePage from "../template";
import {OnlyHomeSidebarData, OtherSidebarData} from "../../Menu/sidebar_data";

import MyJumbotron from "../jumbotron";

class NotConnected extends React.Component {
    render() {
        return (
            <TemplatePage
                layers={OnlyHomeSidebarData}
                pages={OtherSidebarData}>
                <div style={{minHeight: "100vh"}}>
                    <MyJumbotron height="100vh">
                        <div className="container">
                            <h3 className="row"
                                style={{paddingLeft: "15px", paddingTop: "15px", color: "silver"}}>Service
                                Unavailable</h3>
                            <div className="row">
                                <div className="col-lg-5 col-md-8" style={{color: "silver"}}>
                                    Seems like the connection to the server is not established.<br/>
                                    Try to reconnect later.
                                </div>
                            </div>
                        </div>
                    </MyJumbotron>
                </div>
            </TemplatePage>
        );
    }
}

export default NotConnected;
