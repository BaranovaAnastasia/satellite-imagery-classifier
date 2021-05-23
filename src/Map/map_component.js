import React from 'react';
import Map from "./Map";
import {Layers} from "./Layers";
import {fromLonLat} from 'ol/proj';
import {Controls, FullScreenControl} from "./Controls";
import ImageLayer from "./Layers/ImageLayer";
import Projection from "ol/proj/Projection";

import './map_component.css'
import SizeControl from "./Controls/Size";

class MapComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            center: [-10, 10],
            zoom: 1,
            url: './earth.jpg'
        }
    }

    render() {
        console.log("o: " + this.props.urlOriginal)
        console.log("c: " + this.props.urlClassified)

        let def = this.props.urlOriginal === ''
            || this.props.urlOriginal === undefined
            || this.props.urlOriginal === './earth.jpg';
        console.log(def)

        this.extent = this.props.extent;

        if (!this.extent) {
            const img = new Image();
            img.src = this.props.urlOriginal;
            this.extent = [0, 0, img.naturalWidth, img.naturalWidth];
        }

        console.log(def ? this.state.url : this.props.urlOriginal)

        return (
            <div>
                <Map center={fromLonLat(this.state.center)} zoom={this.state.zoom}>
                    <Layers>
                        {this.props.displayOriginal &&
                        (<ImageLayer
                            url={def ? this.state.url : this.props.urlOriginal}
                            projection={
                                new Projection({
                                    code: 'xkcd-image',
                                    units: 'pixels',
                                    extent: this.extent,
                                })
                            }
                            extent={this.extent}
                            zIndex={this.props.reverse ? 10 : 5}
                            transition={def ? 0.5 : this.props.opacityOriginal / 100}
                            zoom={def ? 0 : this.props.zoom ? this.props.zoom : this.state.zoom}
                        />)}

                        {this.props.displayClassified &&
                        this.props.urlClassified !== '' && this.props.urlClassified !== undefined &&
                        (<ImageLayer
                            url={this.props.urlClassified}
                            projection={
                                new Projection({
                                    code: 'xkcd-image',
                                    units: 'pixels',
                                    extent: this.extent,
                                })
                            }
                            extent={this.extent}
                            zIndex={this.props.reverse ? 5 : 10}
                            transition={this.props.opacityClassified / 100}
                            zoom={this.state.zoom}
                        />)}

                    </Layers>
                    <Controls>
                        <FullScreenControl/>
                        <SizeControl/>
                    </Controls>
                </Map>
            </div>
        );
    }
}

export default MapComponent;
