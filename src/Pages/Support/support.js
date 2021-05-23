import React from "react";

import TemplatePage from "../template";
import {OnlyHomeSidebarData, OtherSidebarData} from "../../Menu/sidebar_data";

import './support.css';
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";
import * as IoIcons from "react-icons/io5";
import {LoopCircleLoading} from "react-loadingg";
import Host from "../../Host";
import MyJumbotron from "../jumbotron";

class Support extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
            status: false,
            ready: false,

            k: false,
        }

        this.data = {
            name: '',
            email: '',
            subject: '',
            message: '',
        }
    }

    onNameChange(ev) {
        const val = ev.target.value
        this.setState({name: val});
        this.data.name = val;
        this.checkData();
    }

    onEmailChange(ev) {
        const val = ev.target.value
        this.setState({email: val});
        this.data.email = val;
        this.checkData();
    }

    onSubjectChange(ev) {
        const val = ev.target.value
        this.setState({subject: val});
        this.data.subject = val;
        this.checkData();
    }

    onMessageChange(ev) {
        const val = ev.target.value
        this.setState({message: val});
        this.data.message = val;
        this.checkData();
    }

    reset() {
        this.data = {
            name: '',
            email: '',
            subject: '',
            message: '',
        }

        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',

            modalShow: false,
            ready: false,
            status: false,
        });
    }

    send() {
        console.log(JSON.stringify(this.data))

        this.setState({modalShow: true, status: false})
        fetch(this.context.host + "/notify", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.data),
        }).then(() => {
            this.setState({status: true})
        });
    }

    checkData() {
        this.setState({
            ready: this.data.name.trim() !== '' &&
                this.data.email.trim() !== '' &&
                this.data.subject.trim() !== '' &&
                this.data.message.trim() !== ''
        })
    }

    handleClose = () => {
        this.reset()
    };


    render() {
        console.log("rendering support")
        return (
            <TemplatePage
                layers={OnlyHomeSidebarData}
                pages={OtherSidebarData.slice(0, 2)}>
                <div style={{minHeight: "100vh",}}>
                    <MyJumbotron height="230px"/>
                    <div className="container" style={{position:"absolute", top:"50px", left:"5em"}}>
                        <h2 className="row"
                            style={{paddingLeft: "15px", paddingTop: "15px", color:"#F0F0F0", opacity: 0.8}}>
                            Support
                        </h2>
                        <div className="row">
                            <div className="col-lg-5 col-md-8" style={{color: "#F0F0F0", opacity: 0.8}}>
                                If you faced a problem with our app, please inform us using the form below.
                            </div>
                        </div>
                        <form
                            style={{paddingTop: "30px"}}
                            onSubmit={() => {
                            }}>
                            <div className="row">
                                <div className="col-lg-5 col-md-8">
                                    <div style={{backgroundColor: "#F0F0F0", borderRadius: "3px", padding: "20px"}}
                                         className="container-fluid">
                                        <label className="row">
                                            <input className="col-12 input" type="text" placeholder="First Name"
                                                   value={this.state.name} onChange={this.onNameChange.bind(this)}/>
                                        </label>
                                        <label className="row">
                                            <input className="col-12 input" type="email" placeholder="Email Address"
                                                   value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                                        </label>
                                        <label className="row">
                                            <input className="col-12 input" type="text" placeholder="Subject"
                                                   value={this.state.subject}
                                                   onChange={this.onSubjectChange.bind(this)}/>
                                        </label>
                                        <label className="row">
                                            <textarea className="col-12 input"
                                                      style={{height: "10em", minHeight: "30px"}}
                                                      placeholder="Message"
                                                      value={this.state.message}
                                                      onChange={this.onMessageChange.bind(this)}/>
                                        </label>
                                        <label className="row" style={{marginBottom: 0}}>
                                            <div className="col-lg-9 col-md-8"/>
                                            <div className="col-lg-3 col-md-4" style={{paddingRight: 0}}>
                                                <input id="submit" className="col-12 btn btn-secondary" type="submit"
                                                       disabled={!this.state.ready}
                                                       value="Submit"
                                                       onClick={((ev) => {
                                                           ev.preventDefault();
                                                           this.send();
                                                       })}/>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <Modal show={this.state.modalShow}
                               onHide={this.handleClose}
                               animation={true}
                               dialogClassName="modal-dialog-centered">
                            <Modal.Header>
                                <Modal.Title>Support</Modal.Title>
                                <Button style={{
                                    maxWidth: "50px",
                                    backgroundColor: "silver",
                                    border: "none"
                                }}
                                        onClick={this.handleClose}
                                        onP>
                                    <IoIcons.IoClose style={{
                                        color: "black",
                                        fontSize: "1.5em",
                                        backgroundColor: "silver"
                                    }}/>
                                </Button>
                            </Modal.Header>
                            <Modal.Body>
                                {this.state.status ?
                                    <div>Message sent.<br/>We will address your problem as soon as possible.</div>
                                    : <div>Sending...<LoopCircleLoading color={"rgba(1,32,20,0.5)"}/></div>}
                            </Modal.Body>
                            <Modal.Footer>
                            </Modal.Footer>
                        </Modal>

                    </div>
                </div>
            </TemplatePage>
        );
    }
}

Support.contextType = Host;

export default Support;
