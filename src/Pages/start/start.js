import React from "react";

import TemplatePage from "../template";
import {OnlyHomeSidebarData, OtherSidebarData} from "../../Menu/sidebar_data";

import MyJumbotron from "../jumbotron";
import './start.css'

const centeredBoth = {
    color: "silver",
    margin: 0,
    position: "absolute",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 5
}

class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
        }
    }

    componentDidMount() {
        let test = document.getElementById("Size");
        let width = (test.clientWidth + 1) + "px"
        this.setState({width: width})
        console.log(width)
    }

    render() {
        return (
            <>
                <TemplatePage
                    layers={OnlyHomeSidebarData}
                    pages={OtherSidebarData}
                    displayHeader={false}>
                    <MyJumbotron height="100vh">
                        <div className="container text-center" style={{
                            opacity: 0.6,
                            fontWeight: "bold",
                        }}>
                            <div className="row" style={{...centeredBoth, ...{top: "30%"}}}>
                                <h1 id="Size" className="col-12 text-uppercase"
                                    style={{fontWeight: "bold"}}>
                                    Satellite Imagery Classifier
                                </h1>
                            </div>
                            <div className="row d-none d-sm-none d-md-flex" style={{
                                color: "silver",
                                margin: 0,
                                position: "absolute",
                                top: "calc(30% + 50px)",
                                left: "50%",
                                marginRight: "-50%",
                                transform: "translate(-50%, -50%)",
                                width: this.state.width,
                                zIndex: 0
                            }}>
                                <h4 className="col-3" style={{color: "silver"}}>
                                    <a href="/classifier" style={{color: "silver"}}>Classifier</a>
                                </h4>
                                <h4 className="col-3" style={{color: "silver"}}>
                                    <a href="/about" style={{color: "silver"}}>About</a>
                                </h4>
                                <h4 className="col-3" style={{color: "silver"}}>
                                    <a href="/contacts" style={{color: "silver"}}>Contact Us</a>
                                </h4>
                                <h4 className="col-3" style={{color: "silver"}}>
                                    <a href="/support" style={{color: "silver"}}>Support</a>
                                </h4>
                            </div>
                        </div>
                    </MyJumbotron>
                </TemplatePage>
            </>
        );
    }
}

export default Start;
