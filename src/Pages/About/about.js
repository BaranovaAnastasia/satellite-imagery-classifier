import React from "react";

import TemplatePage from "../template";
import {OnlyHomeSidebarData, OtherSidebarData} from "../../Menu/sidebar_data";

import './about.css'
import MyJumbotron from "../jumbotron";

class About extends React.Component {
    render() {
        const content = (
            <div className="container"
                 style={{
                     color: "silver",
                     opacity: 0.7,
                 }}>

                <div className="container"
                     style={{
                         color: "black"
                     }}>

                    <div id="motivation" className="row" style={{padding: "20px", borderBottom: "2px solid #0f211f"}}>
                        <div className="col-12">
                            <h4>Motivation</h4>
                            <div>
                                Land use classification is an extremely important task, on which specialists from
                                various fields of geography and geoinformatics are actively working.
                                The surface of the planet is constantly changing, especially when it comes to urbanized
                                areas, and therefore there is a need for systems capable of high-quality,
                                high-precision classification and creation of land-use maps.
                            </div>
                            <br/>
                            <div>
                                Our project is here to help in this important but rather difficult task. In this app we
                                tried
                                to create a system that allows to create land-use maps from satellite imagery easily and
                                effectively.
                                We attempted to implement a high-quality SVM classifier and an easy-to-use user-friendly
                                interface that anyone
                                who needs the application's functionality can work with.
                            </div>
                        </div>
                    </div>

                    <div id="how-to-use" className="row" style={{padding: "20px", borderBottom: "2px solid #0f211f"}}>
                        <div className="col-12">
                            <h4>How to use</h4>
                            <div>
                                User manual is available in russian language only on <a
                                href="https://drive.google.com/file/d/1R1qKcA0PYTFgH4kGd_SbiYcWjbQxRtYr/view?usp=sharing"
                                target="_blank">
                                Google Drive</a>.
                            </div>
                            <br/>
                            <div>
                                <div>
                                    Satellite imagery classifier is a program designed to process satellite imagery to
                                    create land
                                    cover maps recognizing and highlighting
                                    6 different types of land use: water, ground, fields, trees, vegetation and
                                    infrastructure.
                                </div>
                                <br/>
                                <div>
                                    The classifier accepts images only in <a
                                    href="https://en.wikipedia.org/wiki/GeoTIFF" target="_blank">
                                    GeoTIFF
                                </a> format, which is the standard format for the distribution of satellite images.
                                </div>
                                <br/>
                                <div>
                                    <div>
                                        For better results we recommend you to provide images in better resolution with bigger
                                        number of layers. You can follow video manual below to learn where to get satellite images and how to prepare
                                        them for classification.
                                    </div>
                                    <br/>
                                    <iframe width="600" height="300" style={{margin: "0 auto", display:"block"}}
                                            src="https://www.youtube.com/embed?v=hgmhERX4YBw&list=PLzHdTn7Pdxs6R6gf-0aLCqy8pL1GazPEe">
                                    </iframe>
                                    <br/>
                                    <div>
                                        Alternatively, you can just use The National Agriculture Imagery Program (NAIP) Imagery.
                                        NAIP imagery are available at <a href="https://earthexplorer.usgs.gov/">EarthExplorer</a> (only United States areas).
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div id="developers" className="row" style={{padding: "20px", borderBottom: "2px solid #0f211f"}}>
                        <div className="col-12">
                            <h4>Developers</h4>
                            <div>
                                Satellite Imagery Classifier was developed as a coursework project
                                "System for Satellite Imagery Processing using SVM (Support Vector Machines)."
                                as part of the curriculum for the preparation of "Software Engineering" bachelors.
                                Higher School of Economics, Moscow, 2021.
                            </div>
                            <br/>
                            <h5>Performers</h5>
                            <div>
                                Website developed by Anastasia A. Baranova, BSE196<br/>
                                Server developed by Dmitriy E. Kalmykov, BSE196<br/>
                            </div>
                            <br/>
                            <h5>Supervisor</h5>
                            <div>
                                Ramon Antonio Rodriges Zalipynis,<br/>
                                Associate Professor: Faculty of Computer Science / School of Software Engineering
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{padding: "20px"}}>
                        <div className="col-12">
                            <h4 id="source">Source</h4>
                            <div>
                                All sources are available in our GitHub repositories.<br/>
                                Website: <a href="https://github.com/BaranovaAnastasia/satellite-imagery-classifier"
                                            target="_blank">
                                GitHub
                            </a><br/>
                                Server: <a href="https://github.com/Dima-Kalmykov/Image-analysis"
                                           target="_blank">
                                GitHub
                            </a><br/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )


        return (
            <TemplatePage
                layers={OnlyHomeSidebarData}
                pages={OtherSidebarData.slice(1, 3)}>
                <div style={{minHeight: "100vh"}}>
                    <MyJumbotron height="230px" content={content}>
                        <div className="container">
                            <div className="centered text-center"
                                 style={{paddingTop: "100px", opacity: 0.8, color: 'silver'}}>
                                <div className="row" style={{marginTop: "30px"}}>
                                    <h4 className="col-12">About App</h4>
                                </div>
                                <div className="row">
                                    A Support Vector Machine based classifier processing satellite imagery to
                                    <br/>recognize areas corresponding to different types of land use.<br/>
                                </div>

                                <div className="row" style={{marginTop: "10px"}}>
                                    <a href="#motivation" className="col-3" style={{color: "silver"}}>
                                        Motivation
                                    </a>
                                    <a href="#how-to-use" className="col-3" style={{color: "silver"}}>
                                        How to use
                                    </a>
                                    <a href="#developers" className="col-3" style={{color: "silver"}}>
                                        Developers
                                    </a>
                                    <a href="#source" className="col-3" style={{color: "silver"}}>
                                        Source
                                    </a>
                                </div>
                            </div>
                        </div>
                    </MyJumbotron>

                    {content}

                </div>
            </TemplatePage>
        );
    }
}

export default About;
