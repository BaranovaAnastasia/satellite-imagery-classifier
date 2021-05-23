import React from "react";
import PropTypes from "prop-types";

const styles = {
    root: {
        fontFamily:
            '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
        fontWeight: 300,
    },
    header: {
        background: "none",
        color: "silver",
        padding: "10px",
        fontSize: "1.5em",
        height:"56px"
    }
};

const MaterialTitlePanel = props => {
    const rootStyle = props.style
        ? {...styles.root, ...props.style}
        : styles.root;
    const headerStyle = props.colorHeader
        ? {...styles.header, ...{backgroundColor: "#0f211f"}}
        : styles.header;

    return (
        <div style={rootStyle}>
            <div style={headerStyle}>{props.title}</div>
            {props.children}
        </div>
    );
};

MaterialTitlePanel.propTypes = {
    style: PropTypes.object,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    children: PropTypes.object
};

export default MaterialTitlePanel;
