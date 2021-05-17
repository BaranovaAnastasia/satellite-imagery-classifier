import React from "react";

import TemplatePage from "../template";
import {OnlyHomeSidebarData, OtherSidebarData} from "../../Menu/sidebar_data";

class Contact extends React.Component {
    render() {
        return (
            <TemplatePage
                layers={OnlyHomeSidebarData}
                pages={OtherSidebarData.slice(0, 2).concat(OtherSidebarData.slice(3))}
                content={
                    <div>
                        <h1>Contact Us</h1>
                    </div>
                }
            />
        );
    }
}

export default Contact;
