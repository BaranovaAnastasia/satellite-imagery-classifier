import React from "react";

import Sidebar from "react-sidebar";
import MaterialTitlePanel from "../Menu/material_title_panel";
import SidebarContent from "../Menu/sidebar_content";

import "./Home/home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import * as FaIcons from "react-icons/fa";

const styles = {
    contentHeaderMenuLink: {
        textDecoration: "none",
        color: "silver",
        padding: 8
    }
};

class TemplatePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            transitions: true,
            touch: true,
            shadow: true,
            touchHandleWidth: 20,
            dragToggleDistance: 30,

            layers: props.layers,
            pages: props.pages,
            showSelect: props.showSelect,
        };

        this.onSetOpen = this.onSetOpen.bind(this);
        this.menuButtonClick = this.menuButtonClick.bind(this);
    }

    onSetOpen(open) {
        this.setState({open});
    }

    menuButtonClick(ev) {
        ev.preventDefault();
        this.onSetOpen(!this.state.open);
    }

    render() {
        console.log("rendering template")

        const sidebar = <SidebarContent
            layers={this.state.layers}
            pages={this.state.pages}
            showSelect={this.state.showSelect}
            onUploaded={this.props.onUploaded}
        />;

        const contentHeader = (
            <span> {!this.state.docked && (
                <a
                    onClick={this.menuButtonClick}
                    href="/"
                    style={styles.contentHeaderMenuLink}>
                    <FaIcons.FaBars/>
                </a>
            )}
                <a href={"/"} className="navbar-brand text-uppercase">
                Satellite Imagery Classifier
            </a>
            </span>
        );

        const sidebarProps = {
            sidebar,
            docked: this.state.docked,
            sidebarClassName: "custom-sidebar-class",
            contentId: "custom-sidebar-content-id",
            open: this.state.open,
            touch: this.state.touch,
            shadow: this.state.shadow,
            pullRight: this.state.pullRight,
            touchHandleWidth: this.state.touchHandleWidth,
            dragToggleDistance: this.state.dragToggleDistance,
            transitions: this.state.transitions,
            onSetOpen: this.onSetOpen,
        };

        return (
            <Sidebar {...sidebarProps}>
                <MaterialTitlePanel title={contentHeader}>
                    {this.props.children}
                </MaterialTitlePanel>
                <div className="container-fluid footer">
                    Higher School of Economics, Moscow, 2021
                </div>
            </Sidebar>
        );
    }
}

export default TemplatePage;
