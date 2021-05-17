import React from 'react';
import * as IoIcons from "react-icons/io5";
import MapComponent from "../../../Map/map_component";
import ClassificationOptions from "./classification_options";
import './home_content.css';
import Upload from "../upload/upload";
import Classify from "../classify/classify";
import OpacitySlider from "./OpacitySlider";
import LayersList from "./layers_list";

class HomeContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opacityOriginal: 100,
            opacityClassified: 100,
            urlOriginal: props.url,
            urlClassified: '',
            extent: this.props.extent,

            displayOriginal: true,
            displayClassified: true,
            reverse: false,

            water: "#1357ae",
            field: "#808000",
            tree: "#183215",
            ground: "#800000",
            infrastructure: "#808080",
            vegetation: "#008000",

            id: -1,

            k: true,
        }
    }

    handleOpacityOriginalChange = async (event, newValue) => {
        await this.setState({
            opacityOriginal: newValue,
            k: !this.state.k,
        })
    };
    handleOpacityClassifiedChange = async (event, newValue) => {
        await this.setState({
            opacityClassified: newValue,
            k: !this.state.k,
        })
    };
    handleReverse = async (newValue) => {
        await this.setState({
            reverse: newValue,
            k: !this.state.k,
        })
    };

    async onUploadedOriginal(url, extent, id) {
        await this.props.onUploadedOriginal(url, extent);
        await this.setState({
            urlOriginal: url,
            extent: extent,
            id: id,
            k: !this.state.k,
        })
    }

    async onUploadedClassified(url, extent) {
        await this.setState({
            urlClassified: url,
            extent: extent,
            k: !this.state.k,
        })
    }

    handlePaletteChange = async (option) => {
        option.k = !this.state.k
        await this.setState(option)
    };

    render() {
        console.log("rendering content...");
        console.log(this.props.url);
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="home-col-1 col-lg-2 col-md-3 col-sm-4">
                        <div className='container-fluid basic-buttons'>
                            <Classify className='row row-button text-center'
                                      onClassified={this.onUploadedClassified.bind(this)}
                                      kernel="rbf"
                                      water={this.state.water}
                                      field={this.state.field}
                                      tree={this.state.tree}
                                      ground={this.state.ground}
                                      infrastructure={this.state.infrastructure}
                                      vegetation={this.state.vegetation}
                                      host={'http://192.168.222.36:8080'}
                                      id={this.state.id}/>
                            <Upload className='row row-button text-center'
                                    onUploaded={this.onUploadedOriginal.bind(this)}
                                    button={true}
                                    item={{
                                        id: 'upload',
                                        title: 'Upload',
                                        path: '/',
                                        icon: <IoIcons.IoCloudUploadOutline style={{margin: '4px'}}/>,
                                    }}/>
                            <button className='row row-button text-center'>
                                <IoIcons.IoSaveOutline style={{margin: '4px'}}/>
                                Save
                            </button>
                        </div>

                        <ClassificationOptions
                            onPaletteChange={this.handlePaletteChange}/>

                        <div className="container-fluid opacity-menu">
                            Source opacity:
                            <OpacitySlider onChange={this.handleOpacityOriginalChange}/>
                            Classified opacity:
                            <OpacitySlider onChange={this.handleOpacityClassifiedChange}/>
                        </div>

                        <div className="container-fluid opacity-menu">
                            <LayersList
                                onOriginalChanged={(display) =>
                                    this.setState({
                                        displayOriginal: display,
                                        k: !this.state.k,
                                    })}
                                onClassifiedChanged={(display) =>
                                    this.setState({
                                        displayClassified: display,
                                        k: !this.state.k,
                                    })}
                                onReverse={this.handleReverse}/>
                        </div>

                    </div>

                    <div className="map-content col-lg-10 col-md-9 col-sm-8" key={this.state.k}>
                        <MapComponent
                            urlOriginal={this.props.url}
                            urlClassified={this.state.urlClassified}
                            extent={this.state.extent}
                            opacityOriginal={this.state.opacityOriginal}
                            opacityClassified={this.state.opacityClassified}
                            displayOriginal={this.state.displayOriginal}
                            displayClassified={this.state.displayClassified}
                            reverse={this.state.reverse}
                            k={this.state.k}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeContent;
