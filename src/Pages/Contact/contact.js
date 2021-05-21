import React from "react";

import TemplatePage from "../template";
import {OnlyHomeSidebarData, OtherSidebarData} from "../../Menu/sidebar_data";
import {Jumbotron} from "react-bootstrap";
import './contact.css'
import {WebSharp, Storage} from "@material-ui/icons";

class Contact extends React.Component {
    render() {
        return (
            <TemplatePage
                layers={OnlyHomeSidebarData}
                pages={OtherSidebarData.slice(0, 1).concat(OtherSidebarData.slice(2))}
            >
                <div style={{minHeight: "100vh",}}>
                    <div style={{
                        width: "100%",
                        height: "160px",
                        backgroundColor: "black",
                        opacity: 0.3,
                        position: "absolute",
                        top: 56
                    }}/>
                    <Jumbotron style={{
                        backgroundImage: `url(${'./utah.jpg'})`,
                        backgroundSize: 'cover',
                        height: "160px"
                    }}/>

                    <div className="contacts">
                        <div className="container contacts-container">
                            <h3 className="row" style={{color: "white", marginBottom: "30px"}}>
                                Contact Us
                            </h3>
                            <div className="row" style={{padding: 0}}>
                                <div className="row" style={{width: "100%",}}>
                                    <div className="col-6 text-center"
                                         style={{paddingRight:"40px", paddingLeft:0}}>
                                        <div style={{backgroundColor: "white", paddingTop: "30px", }}>
                                            <WebSharp style={{fontSize: 30}}/>
                                            <br/>
                                            <br/>
                                            <h5>Anastasia Baranova</h5>
                                            <div>Web developer</div>
                                            <a href="mailto:aabaranova_3@edu.hse.ru">aabaranova_3@edu.hse.ru</a>
                                            <br/>
                                            <a href="https://t.me/baranova_anastasia" target="_blank">Telegram</a>
                                        </div>
                                    </div>

                                    <div className="col-6 text-center"
                                         style={{paddingLeft:"40px", paddingRight:0}}>
                                        <div style={{backgroundColor: "white", paddingTop: "30px", }}>
                                            <Storage style={{fontSize: 30}}/>
                                            <br/>
                                            <br/>

                                            <h5>Dmitry Kalmykov</h5>
                                            <div>Backend developer</div>
                                            <a href="mailto:dekalmykov@edu.hse.ru">dekalmykov@edu.hse.ru</a>
                                            <br/>
                                            <a href="https://t.me/Dekalmykov" target="_blank">Telegram</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TemplatePage>
        );
    }
}

export default Contact;
