import React from "react";

import TemplatePage from "../template";
import {OnlyHomeSidebarData, OtherSidebarData} from "../../Menu/sidebar_data";
import './contact.css'
import {WebSharp, Storage} from "@material-ui/icons";
import MyJumbotron from "../jumbotron";

class Contact extends React.Component {
    render() {
        return (
            <TemplatePage
                layers={OnlyHomeSidebarData}
                pages={OtherSidebarData.slice(0, 1).concat(OtherSidebarData.slice(2))}
            >
                <MyJumbotron height="100vh">

                    <div className="contacts">
                        <div className="container contacts-container">
                            <h2 className="row" style={{color: "#F0F0F0", opacity: 0.8, marginBottom: "30px"}}>
                                Contact Us
                            </h2>
                            <div className="row" style={{padding: 0}}>
                                <div className="row" style={{width: "100%",}}>
                                    <div className="col-6 text-center"
                                         style={{paddingRight: "40px", paddingLeft: 0}}>
                                        <div style={{
                                            backgroundColor: "white",
                                            paddingTop: "30px",
                                            paddingBottom: "40px",
                                            opacity: 0.7
                                        }}>
                                            <WebSharp style={{fontSize: 30}}/>
                                            <br/>
                                            <br/>
                                            <h5>Anastasia Baranova</h5>
                                            <div>Frontend developer</div>
                                            <a href="mailto:aabaranova_3@edu.hse.ru"
                                               style={{color: "black"}}>aabaranova_3@edu.hse.ru</a>
                                            <br/>
                                            <a href="https://t.me/baranova_anastasia" target="_blank"
                                               style={{color: "black"}}>Telegram</a>
                                        </div>
                                    </div>

                                    <div className="col-6 text-center"
                                         style={{paddingLeft: "40px", paddingRight: 0}}>
                                        <div style={{
                                            backgroundColor: "white",
                                            paddingTop: "30px",
                                            paddingBottom: "40px",
                                            opacity: 0.7
                                        }}>
                                            <Storage style={{fontSize: 30}}/>
                                            <br/>
                                            <br/>

                                            <h5>Dmitry Kalmykov</h5>
                                            <div>Backend developer</div>
                                            <a href="mailto:dekalmykov@edu.hse.ru"
                                               style={{color: "black"}}>dekalmykov@edu.hse.ru</a>
                                            <br/>
                                            <a href="https://t.me/Dekalmykov" target="_blank"
                                               style={{color: "black"}}>Telegram</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MyJumbotron>
            </TemplatePage>
        );
    }
}

export default Contact;
