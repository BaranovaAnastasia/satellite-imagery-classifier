import React from 'react';
import MapComponent from "../../../Map/map_component";
import ClassificationOptions from "./classification_options";
import './home_content.css';
import Upload from "../basic/upload";
import Classify from "../basic/classify";
import OpacitySlider from "./OpacitySlider";
import LayersList from "./layers_list";
import Save from "../basic/save";
import TemplatePage from "../../template";
import SelectModal from "../select/select_modal";

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

            k: true,
        }

        this.options = {
            kernel: 'linear',
            water: "#1357ae",
            field: "#808000",
            tree: "#183215",
            ground: "#800000",
            infrastructure: "#808080",
            vegetation: "#008000",
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

    onUploadedOriginal = async (url, extent, callHome) => {
        if (callHome !== undefined && callHome) {
            await this.props.onUploadedOriginal(url, extent);
        }
        await this.setState({
            urlOriginal: url,
            urlClassified: '',
            extent: extent,
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
        Object.assign(this.options, option);
    };
    handleKernelChange = async (kernel) => {
        Object.assign(this.options, {kernel: kernel});
    };

    handleClose = async () => {
        this.props.handleClose()
        await this.setState({
            k: !this.state.k,
        });
    };

    render() {
        return (
            <div className="container-fluid" style={{paddingLeft: 0, paddingRight: 0}}>
                <div className="row">
                    <div className="home-col-1 col-lg-2 col-md-3 col-sm-4">
                        <div className='container-fluid basic-buttons'>
                            <Upload className='row row-button text-center'
                                    onUploaded={this.onUploadedOriginal.bind(this)}
                                    button={true}/>
                            <Classify className='row row-button text-center'
                                      onClassified={this.onUploadedClassified.bind(this)}
                                      options={this.options}/>
                            <Save className='row row-button text-center'
                                  onUploaded={this.onUploadedOriginal.bind(this)}
                                  button={true}/>
                        </div>

                        <ClassificationOptions
                            onPaletteChange={this.handlePaletteChange}
                            onKernelChange={this.handleKernelChange}/>

                        <div className="container-fluid opacity-menu">
                            Source opacity:
                            <OpacitySlider onChange={this.handleOpacityOriginalChange}/>
                            Classified opacity:
                            <OpacitySlider onChange={this.handleOpacityClassifiedChange}/>
                        </div>

                        <div className="container-fluid" style={{paddingTop: "15px"}}>
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
                            urlOriginal={this.state.urlOriginal}
                            urlClassified={this.state.urlClassified}
                            extent={this.state.extent}
                            opacityOriginal={this.state.opacityOriginal}
                            opacityClassified={this.state.opacityClassified}
                            displayOriginal={this.state.displayOriginal}
                            displayClassified={this.state.displayClassified}
                            reverse={this.state.reverse}
                            zoom={this.state.zoom}
                            k={this.state.k}
                            update={this.props.update}/>
                    </div>
                </div>

                <SelectModal onSelected={this.onUploadedOriginal.bind(this)}
                             onHide={this.handleClose}
                             show={this.props.modalShow}/>
            </div>
        )
    }
}

export default HomeContent;
