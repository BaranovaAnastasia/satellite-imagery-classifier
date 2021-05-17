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
            center: [-94.9065, 38.9884],
            zoom: 9,
        }
    }

    render() {
        console.log("o: " + this.props.urlOriginal)
        console.log("c: " + this.props.urlClassified)

        if (this.props.urlOriginal === '' || this.props.urlOriginal === undefined) {
            return (<div>No map</div>)
        }

        this.extent = this.props.extent;

        if (!this.extent) {
            const img = new Image();
            img.src = this.props.urlOriginal;
            this.extent = [0, 0, img.naturalWidth, img.naturalWidth];
        }

        return (
            <div>
                <Map center={fromLonLat(this.state.center)} zoom={this.state.zoom}>
                    <Layers>
                        {this.props.displayOriginal && !this.props.reverse &&
                        (<ImageLayer
                            url={this.props.urlOriginal}
                            projection={
                                new Projection({
                                    code: 'xkcd-image',
                                    units: 'pixels',
                                    extent: this.extent,
                                })
                            }
                            extent={this.extent}
                            zIndex={5}
                            transition={this.props.opacityOriginal / 100}
                        />)}

                        {this.props.displayClassified && !this.props.reverse &&
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
                            zIndex={10}
                            transition={this.props.opacityClassified / 100}
                        />)}


                        {this.props.displayOriginal && this.props.reverse &&
                        (<ImageLayer
                            url={this.props.urlOriginal}
                            projection={
                                new Projection({
                                    code: 'xkcd-image',
                                    units: 'pixels',
                                    extent: this.extent,
                                })
                            }
                            extent={this.extent}
                            zIndex={10}
                            transition={this.props.opacityOriginal / 100}
                        />)}

                        {this.props.displayClassified && this.props.reverse &&
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
                            zIndex={5}
                            transition={this.props.opacityClassified / 100}
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
