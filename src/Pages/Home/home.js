import React from "react";

import TemplatePage from "../template";
import {HomeLayersSidebarData, OtherSidebarData} from "../../Menu/sidebar_data";

import SelectModal from "./select/select_modal";
import HomeContent from "./content/home_content";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
            url: './earth.png',

            k: false,
        }
    }

    handleClose = async () => {
        await this.setState({
            modalShow: false,
        });
    };

    handleShow = async () => await this.setState({
        modalShow: true,
    });

    async onUploaded(url, extent) {
        this.setState({
            modalShow: false,
            url: url,
            extent: extent,

            k: !this.state.k
        });
    }


    render() {
        console.log("rendering...");
        console.log(this.state.url);
        return (
            <>
                <TemplatePage
                    layers={HomeLayersSidebarData}
                    pages={OtherSidebarData}
                    showSelect={this.handleShow}
                    onUploaded={this.onUploaded.bind(this)}
                    k={this.state.k}
                >
                    <HomeContent onUploadedOriginal={this.onUploaded.bind(this)}
                                 url={this.state.url} extent={this.state.extent} k={this.state.k}/>
                </TemplatePage>
                <SelectModal onSelected={this.onUploaded.bind(this)}
                             onHide={this.handleClose.bind(this)}
                             show={this.state.modalShow}/>
            </>
        );
    }
}

export default Home;
