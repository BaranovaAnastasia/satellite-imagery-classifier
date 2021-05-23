import React from "react";

import TemplatePage from "../template";
import {HomeLayersSidebarData, OtherSidebarData} from "../../Menu/sidebar_data";

import HomeContent from "./content/home_content";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
            url: './earth.jpg',

            k: false,
        }

        this.content = React.createRef();
    }

    handleClose = async () => {
        await this.setState({
            modalShow: false,
            k: !this.state.k,
        });
    };

    handleShow = async () => await this.setState({
        modalShow: true,
        k: !this.state.k,
    });

    async onUploaded(url, extent) {
        this.setState({
            modalShow: false,
            url: url,
            extent: extent,

            k: !this.state.k,
        });
        await this.content.current.onUploadedOriginal(url, extent, false)
    }


    render() {
        return (
            <>
                <TemplatePage
                    layers={HomeLayersSidebarData}
                    pages={OtherSidebarData}
                    showSelect={this.handleShow}
                    onUploaded={this.onUploaded.bind(this)}
                    k={this.state.k}
                    colorHeader={true}
                >
                    <HomeContent ref={this.content}
                                 onUploadedOriginal={this.onUploaded.bind(this)}
                                 url={this.state.url} extent={this.state.extent}
                                 modalShow={this.state.modalShow}
                                 handleClose={this.handleClose.bind(this)}
                                 k={this.state.k}
                                 update={this.state.update}/>
                </TemplatePage>
            </>
        );
    }
}

export default Home;
