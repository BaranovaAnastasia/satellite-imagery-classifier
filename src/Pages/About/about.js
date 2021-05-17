import React from "react";

import TemplatePage from "../template";
import {OnlyHomeSidebarData, OtherSidebarData} from "../../Menu/sidebar_data";

class About extends React.Component {
    render() {
        return (
            <TemplatePage
                layers={OnlyHomeSidebarData}
                pages={OtherSidebarData.slice(1)}
                content={
                    <div>
                        <h1>About</h1>
                    </div>
                }
            />
        );
    }
}

export default About;
