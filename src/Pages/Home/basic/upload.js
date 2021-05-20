import React from "react";
import * as IoIcons from "react-icons/io5";
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";
import {LoopCircleLoading} from "react-loadingg";
import Host from "../../../Host";

class Upload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,
            modalShow: false,
            bigSize: 0.0,
            uploadingShow: false,
        }

        this.inputFile = React.createRef();
    }

    async createId() {
        let resp = await fetch(this.context.host + "/create", {
            method: "GET",
        });
        let blob = await resp.blob();
        let text = await blob.text();
        return Number.parseInt(text);
    }

    async uploadTiff(file) {
        this.setState({uploadingShow: true});

        const id = await this.createId();

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
        this.props.onUploaded(url, extent, id);

        this.setState({uploadingShow: false});
    }

    handleClose = () => {
        this.setState({
            modalShow: false,
        });
    };

    async handleChange(event) {
        if (!event.target.files[0]) return;

        if (event.target.files[0].size > 10000000) {
            this.setState({
                modalShow: true,
                bigSize: Math.round(event.target.files[0].size / 1000000.0 * 100) / 100
            })
            console.log()
        } else {
            await this.uploadTiff(event.target.files[0])
        }
    }

    render() {
        return (
            <>
                {this.props.button &&
                <button className={this.props.className} onClick={() => this.inputFile.click()}>

                    <input type='file' id='file' accept=".tif,.tiff"
                           ref={(ref) => this.inputFile = ref}
                           onChange={this.handleChange.bind(this)}
                           style={{display: "none"}}/>

                    <IoIcons.IoCloudUploadOutline style={{margin: '4px'}}/>
                    Upload
                </button>
                }
                {!this.props.button &&
                <div className={this.props.className}>

                    <input type='file' id='file' accept=".tif,.tiff"
                           ref={(ref) => this.inputFile = ref}
                           onChange={this.handleChange.bind(this)}
                           style={{display: "none"}}/>

                    <div style={this.props.style} onClick={() => this.inputFile.click()}>
                        <IoIcons.IoCloudUploadOutline />
                        <span style={{paddingLeft: "10px"}}>Upload</span>
                    </div>
                </div>
                }


                <Modal show={this.state.modalShow}
                       onHide={this.handleClose}
                       animation={true}
                       dialogClassName="modal-dialog-centered">
                    <Modal.Header>
                        <Modal.Title>File cannot be uploaded</Modal.Title>
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
                    <Modal.Body>
                        Your file is too large.<br/>
                        The size of the file you're trying to upload is {this.state.bigSize} MB.<br/>
                        For now, we can only work with the satellite imagery of the size 10 MB
                        maximum.
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
            </>
        )
    }
}
Upload.contextType = Host;

export default Upload;
