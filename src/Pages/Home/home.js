import React from "react";

import TemplatePage from "../template";
import {HomeLayersSidebarData, OtherSidebarData} from "../../Menu/sidebar_data";

import * as IoIcons from 'react-icons/io5';
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";
import SelectModal from "./Select/select_modal";
import HomeContent from "./content/home_content";
import {Datasets} from "./Select/datasets";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
            selectedInModal: false,
            url: '',

            k: false,
        }
    }

    handleClose = async () => {
        await this.setState({
            modalShow: false,
            selectedInModal: false,
        });
    };

    handleShow = async () => await this.setState({
        modalShow: true,
        selectedInModal: false,
    });

    async onSelectedFromModal(i) {
        await this.setState({
            selectedInModal: true,
            modalShow: false,
            url: Datasets[i].url,

            k: !this.state.k
        });
    }

    async onUploaded(url, extent) {
        this.setState({
            selectedInModal: true,
            modalShow: false,
            url: url,
            extent: extent,

            k: !this.state.k
        });
    }

    select = <SelectModal onSelected={(i) => this.onSelectedFromModal(i)}/>


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
                <Modal show={this.state.modalShow}
                       onHide={this.handleClose}
                       animation={true}
                       dialogClassName="modal-dialog-centered modal-lg">
                    <Modal.Header>
                        <Modal.Title>Select dataset</Modal.Title>
                        <Button style={{
                            maxWidth: "50px",
                            backgroundColor: "white",
                            border: "none"
                        }}
                                onClick={this.handleClose}
                                onP>
                            <IoIcons.IoClose style={{
                                color: "black",
                                fontSize: "1.5em",
                                backgroundColor: "white"
                            }}/>
                        </Button>
                    </Modal.Header>
                    <Modal.Body>{this.select}</Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default Home;
