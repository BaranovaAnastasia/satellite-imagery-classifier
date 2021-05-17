import React from "react";
import PropTypes from "prop-types";
import MaterialTitlePanel from "./material_title_panel";
import {Link} from "react-router-dom";
import Upload from "../Pages/Home/upload/upload";

const styles = {
  sidebar: {
    width: 220,
    height: "100%",
    backgroundColor: "#013220"
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

const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

  const linksLayers = [];
  const linksOther = [];

  for (let ind = 0; ind < props.layers.length; ind++) {
    const item = props.layers[ind];
    if(item.id === "select"){
      linksLayers.push(
          <Link key={ind} to={item.path} style={styles.sidebarLink} onClick={props.showSelect}>
            {item.icon}
            <span style={{paddingLeft: "10px"}}>{item.title}</span>
          </Link>
      );
      continue;
    }
    linksLayers.push(item.id === 'upload' ?
        <Upload item={item} key={ind} style={styles.sidebarLink} onUploaded={props.onUploaded} />
        :
        <Link key={ind} to={item.path} style={styles.sidebarLink}>
          {item.icon}
          <span style={{paddingLeft: "10px"}}>{item.title}</span>
        </Link>
    );
  }

  for (let ind = 0; ind < props.pages.length; ind++) {
    const item = props.pages[ind];
    linksOther.push(
        <Link key={ind} to={item.path} style={styles.sidebarLink}>
          {item.icon}
          <span style={{paddingLeft: "10px"}}>{item.title}</span>
        </Link>
    );
  }

  return (
    <MaterialTitlePanel title="Menu" style={style}>
      <div style={styles.content}>
        <div style={styles.titleDivider} />
        {linksLayers}
        <div style={styles.divider} />
        {linksOther}
        <div style={styles.divider} />
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object
};

export default SidebarContent;
