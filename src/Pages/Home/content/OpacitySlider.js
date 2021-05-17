import Grid from "@material-ui/core/Grid";
import React from "react";
import Tooltip from "@material-ui/core/Tooltip";

import './home_content.css'
import Slider from "@material-ui/core/Slider";
import AddSharp from '@material-ui/icons/AddSharp';
import RemoveSharp from '@material-ui/icons/RemoveSharp';


class OpacitySlider extends React.Component{
    ValueLabelComponent(props) {
        const {children, open, value} = props;

        return (
            <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
                {children}
            </Tooltip>
        );
    }

    render() {
        console.log("slider")
        return (
            <div className="row opacity-slider">
                <Grid container spacing={2} style={{width:"100%"}}>
                    <Grid item xs style={{marginRight:"6px"}}>
                        <Slider
                            ValueLabelComponent={this.ValueLabelComponent}
                            defaultValue={100}
                            onChange={this.props.onChange}
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default OpacitySlider;
