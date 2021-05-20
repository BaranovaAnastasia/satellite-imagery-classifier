import React from "react";
import PropTypes from "prop-types";
import MaterialTitlePanel from "./material_title_panel";
import {Link} from "react-router-dom";
import Upload from "../Pages/Home/basic/upload";
import Save from "../Pages/Home/basic/save";

const styles = {
    sidebar: {
        width: 220,
        height: "100%",
        backgroundColor: "black"
    },
    sidebarLink: {
        display: "block",
        padding: "16px 0px",
        color: "#f5f5f5",
        textDecoration: "none",
        fontSize: "18px"
    },
    divider: {
        margin: "8px 0",
        height: 0.5,
        backgroundColor: "#f5f5f5",
        zIndex: 10,
    },
    titleDivider: {
        margin: "8px 0",
        marginTop: "-16px",
        height: 0.5,
        backgroundColor: "#f5f5f5",
        zIndex: 10,
    },
    content: {
        padding: "16px",
        backgroundColor: "#013220!important"
    }
};

class SidebarContent extends React.Component {
    constructor(props) {
        super(props);
        console.log("SidebarContent constructor")

        this.style = this.props.style
            ? {...styles.sidebar, ...this.props.style}
            : styles.sidebar;

        this.state = {
            showSelect: false,
        }

        this.linksLayers = [];
        this.linksOther = [];

        console.log(props)

        this.fillLinks();
    }

    fillLinks() {
        console.log(this.props.layers)
        for (let ind = 0; ind < this.props.layers.length; ind++) {
            const item = this.props.layers[ind];
            this.linksLayers.push(
                item.id === 'upload'
                    ?
                    <Upload item={item} key={ind} style={styles.sidebarLink}
                            onUploaded={this.props.onUploaded}/>
                    :
                    item.id === 'download'
                        ?
                        <Save item={item} key={ind} style={styles.sidebarLink}
                              onUploaded={this.props.onUploaded}/>
                        :
                        item.id === 'select'
                            ?
                            <div key={ind} style={styles.sidebarLink}
                                  onClick={this.props.showSelect}>
                                {item.icon}
                                <span style={{paddingLeft: "10px"}}>{item.title}</span>
                            </div>
                            :
                            <Link key={ind} to={item.path} style={styles.sidebarLink}>
                                {item.icon}
                                <span style={{paddingLeft: "10px"}}>{item.title}</span>
                            </Link>
            );
        }

        for (let ind = 0; ind < this.props.pages.length; ind++) {
            const item = this.props.pages[ind];
            this.linksOther.push(
                <Link key={ind} to={item.path} style={styles.sidebarLink} target="_blank">
                    {item.icon}
                    <span style={{paddingLeft: "10px"}}>{item.title}</span>
                </Link>
            );
        }
    }

    render() {
        return (
            <MaterialTitlePanel title="Menu" style={this.style}>
                <div style={styles.content}>
                    <div style={styles.titleDivider}/>
                    {this.linksLayers}
                    <div style={styles.divider}/>
                    {this.linksOther}
                    <div style={styles.divider}/>
                </div>
            </MaterialTitlePanel>
        )
    }
}

SidebarContent.propTypes = {
    style: PropTypes.object
};

export default SidebarContent;
