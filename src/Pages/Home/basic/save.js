import React from "react";
import * as IoIcons from "react-icons/io5";
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";
import {LoopCircleLoading} from "react-loadingg";
import Host from "../../../Host";

class Save extends React.Component {
    constructor(props) {
        super(props);
        this.submit = React.createRef();
    }


    render() {
        return (
            <form action={this.context.host + "/download/" + this.context.id} method="GET" target="_blank">
                <input type="submit" style={{display: "none"}}
                       ref={(ref) => this.submit = ref}/>
                {this.props.button &&
                <button className={this.props.className}
                        onClick={() => this.submit.click()}
                        disabled={this.context.id === -1}>
                    <IoIcons.IoSaveOutline style={{margin: '4px'}}/>
                    Download
                </button>}
                {!this.props.button &&
                <div className={this.props.className}
                     onClick={() => {
                         if (this.context.id === -1) return;
                         this.submit.click()
                     }}>
                    <div style={this.props.style}>
                        {this.props.item.icon}
                        <span style={{paddingLeft: "10px"}}>Download</span>
                    </div>
                </div>}
            </form>
        )
    }
}

Save.contextType = Host;

export default Save;
