import React from "react";
import * as IoIcons from "react-icons/io5";
import {Modal, ProgressBar} from "react-bootstrap";
import {LoopCircleLoading} from 'react-loadingg';

class Classify extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0,
            phase: 'Traversing the image...',
            progressShow: false,
        }
    }

    getClassifyRequest() {
        let res = this.props.host + '/classify/' + this.props.id +
            '?kernel=' + this.props.kernel +
            '&water=' + this.props.water +
            '&field=' + this.props.field +
            '&tree=' + this.props.tree +
            '&ground=' + this.props.ground +
            '&infrastructure=' + this.props.infrastructure +
            '&vegetation=' + this.props.vegetation;

        res = res.replaceAll('#', '');
        console.log(res)
        return res;
    }

    getProgressRequest() {
        let res = this.props.host + '/progress/' + this.props.id;
        console.log(res)
        return res
    }

    async send() {
        await this.setState({progressShow: true})
        let resp = fetch(this.getClassifyRequest(), {
            method: "POST",
        });
        resp.then(
            async (response ) => {
                console.log("Resp received");
                let blob = await response.blob();
                console.log("Blob received")
                let blobURL = URL.createObjectURL(blob);
                console.log("Blob url received")

                const img = new Image();

                img.onload = () => this.load(img, blobURL)
                img.src = blobURL;
                await this.setState({progressShow: false})
            }
        );

        while (this.state.progressShow) {
            let respProgress = await fetch(this.getProgressRequest(), {
                method: "GET",
            });
            let blobP = await respProgress.blob()
            let text = await blobP.text();

            await this.setState({progress: Number.parseFloat(text)})

            if(this.state.progress >= 100) {
                await this.setState({phase: 'Making predictions...'})
            }
        }
    }

    load(img, url) {
        const w = img.naturalWidth;
        const h = img.naturalHeight;
        const extent = [0, 0, w, h];
        this.props.onClassified(url, extent);
    }

    async handleChange() {
        await this.send()

    }

    render() {
        return (
            <button className={this.props.className} onClick={this.handleChange.bind(this)}>
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
                        For larger images, the process can take up to 5 minutes.<br/><br/>

                        {this.state.phase}<br/>
                        {this.state.progress < 100 ? (
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

export default Classify;
