import React from "react";
import './select_modal.css';
import {Datasets} from './datasets';
import Host from "../../../Host";
import Modal from "react-bootstrap/Modal";
import {LoopCircleLoading} from "react-loadingg";
import {Button} from "react-bootstrap";
import * as IoIcons from "react-icons/io5";

class SelectModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            n: 6,
            onSelected: props.onSelected,
            items: [],
            uploadingShow: false,
        }
    }

    highlight(i) {
        this.state.onSelected(i);
    }

    async createId() {
        let resp = await fetch(this.context.host + "/create", {
            method: "GET",
        });
        let blob = await resp.blob();
        let text = await blob.text();
        return Number.parseInt(text);
    }

    async uploadSample(i, file) {
        const id = await this.createId();
        console.log("received id " + id)

        this.context.id = id;

        let data = new FormData()
        data.append('file', file, file.name)

        let resp = await fetch(this.context.host + "/upload/" + this.context.id, {
            method: "POST",
            body: data,
        });
        console.log("Resp received")
        let blob = await resp.blob()
        console.log("Blob received")
        let blobURL = URL.createObjectURL(blob);
        console.log("Blob url received")

        const img = new Image();

        img.onload = () => {
            this.load(img, blobURL, id);
        }
        img.src = blobURL;
    }

    load(img, url, id) {
        const w = img.naturalWidth;
        const h = img.naturalHeight;
        const extent = [0, 0, w, h];
        this.props.onSelected(url, extent, this);
        console.log(extent)

        this.setState({uploadingShow: false});
    }

    handleClose = () => {
        this.setState({
            modalShow: false,
        });
    };

    async handleSelected(i) {
        console.log("SELECTEDDDD " + i)
        console.log(this.props.onSelected)
        this.setState({uploadingShow: true});
        this.props.onHide();

        console.log(Datasets[i].tiff);
        let res = await fetch(Datasets[i].tiff);
        let blob = await res.blob();

        console.log(blob)

        await this.uploadSample(i, blob);

        this.setState({uploadingShow: false});
    }

    render() {
        this.state.items = [];
        for (let i = 0; i < this.state.n; i++) {
            this.state.items.push(
                <div key={i} className="item col-lg-4 col-md-4 col-sm-6" onClick={() => this.handleSelected(i)}>
                    <div className={"wrapper"}>
                        <div className={"background"} style={{backgroundImage: `url(${Datasets[i].preview})`}}/>
                    </div>
                    <div className={"content item" + 1}>
                        {Datasets[i].text}
                    </div>
                </div>
            )
        }

        return (
            <div>
                <Modal show={this.props.show}
                       onHide={this.props.onHide}
                       animation={true}
                       dialogClassName="modal-dialog-centered modal-lg">
                    <Modal.Header>
                        <Modal.Title>Select dataset</Modal.Title>
                        <Button style={{
                            maxWidth: "50px",
                            backgroundColor: "white",
                            border: "none"
                        }}
                                onClick={this.props.onHide}
                                onP>
                            <IoIcons.IoClose style={{
                                color: "black",
                                fontSize: "1.5em",
                                backgroundColor: "white"
                            }}/>
                        </Button>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <div className="row">
                                {this.state.items}
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.uploadingShow}
                       animation={true}
                       dialogClassName="modal-dialog-centered">
                    <Modal.Header>
                        <Modal.Title>Uploading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Please, wait...
                        <br/>
                        <LoopCircleLoading color={"rgba(1,32,20,0.5)"}/>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
SelectModal.contextType = Host;

export default SelectModal;
