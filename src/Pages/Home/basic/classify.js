import React from "react";
import * as IoIcons from "react-icons/io5";
import {Modal, ProgressBar} from "react-bootstrap";
import {LoopCircleLoading} from 'react-loadingg';
import Host from "../../../Host";

class Classify extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0,
            phase: '',
            progressShow: false,
        }
    }

    getClassifyRequest() {
        let res = this.context.host + '/classify/' + this.context.id +
            '?kernel=' + this.props.options.kernel +
            '&water=' + this.props.options.water +
            '&field=' + this.props.options.field +
            '&tree=' + this.props.options.tree +
            '&ground=' + this.props.options.ground +
            '&infrastructure=' + this.props.options.infrastructure +
            '&vegetation=' + this.props.options.vegetation;

        res = res.replaceAll('#', '');
        console.log(res)
        return res;
    }

    getProgressRequest() {
        let res = this.context.host + '/progress/' + this.context.id;
        return res
    }

    async prepare() {
        await this.setState({
            phase: 'Traversing the image...',
            progressShow: true,
        })
    }

    async end() {
        await this.setState({
            phase: 'Traversing the image...',
            progressShow: false,
        })
    }

    async trackProgress() {
        do {
            let respProgress = await fetch(this.getProgressRequest(), {
                method: "GET",
            });
            let blobP = await respProgress.blob()
            let text = await blobP.text();

            await this.setState({progress: Number.parseFloat(text)})
        } while (this.state.progress < 100.0)

        if (this.state.progress >= 100) {
            await this.setState({phase: 'Making predictions...'})
        }
    }

    async send() {
        await this.prepare();

        let resp = fetch(this.getClassifyRequest(), {
            method: "GET",
        });
        resp.then(
            async (response) => {
                console.log("Resp received");
                let blob = await response.blob();
                console.log("Blob received")
                let blobURL = URL.createObjectURL(blob);
                console.log("Blob url received")

                const img = new Image();

                img.onload = () => this.load(img, blobURL)
                img.src = blobURL;

                await this.end();
            }
        );

        await this.trackProgress();
    }

    load(img, url) {
        const w = img.naturalWidth;
        const h = img.naturalHeight;
        const extent = [0, 0, w, h];
        this.props.onClassified(url, extent);
    }

    render() {
        return (
            <button className={this.props.className} onClick={this.send.bind(this)} disabled={this.context.id === -1}>
                <IoIcons.IoEarthOutline style={{margin: '4px'}}/>
                Classify

                <Modal show={this.state.progressShow}
                       animation={true}
                       dialogClassName="modal-dialog-centered">
                    <Modal.Header>
                        <Modal.Title>
                            Classification in progress</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Please wait until the end of the classification and do not leave the page.
                        For larger images, the process can take up to 10 minutes.<br/><br/>

                        {this.state.phase}<br/>
                        {this.state.progress < 100.0 ? (
                                <ProgressBar now={this.state.progress}
                                             label={`${this.state.progress}%`}/>
                            ) :
                            <LoopCircleLoading color={"rgba(1,32,20,0.5)"}/>}
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </button>
        )
    }
}
Classify.contextType = Host;

export default Classify;
