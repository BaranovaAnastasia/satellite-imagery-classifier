import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

function MyJumbotron({height, children}) {
    return (
        <div style={{height: `calc(${height} - 56px)`}}>
            <Jumbotron style={{
                backgroundImage: `url(${'/utah.jpg'})`,
                backgroundSize: 'cover',
                height: height,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                zIndex: -10,
                borderRadius: 0,
                opacity: 0.5
            }}>
            </Jumbotron>
            <div style={{
                width: "100%",
                height: height,
                backgroundColor: "black",
                position: "absolute",
                top: 0,
                zIndex: -15,
            }}/>
            {children}
        </div>
    )

}

export default MyJumbotron;
