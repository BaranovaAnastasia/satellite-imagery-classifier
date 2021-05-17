import React from "react";

import TemplatePage from "../template";
import {OnlyHomeSidebarData, OtherSidebarData} from "../../Menu/sidebar_data";

class Support extends React.Component {
    render() {
        return (
            <TemplatePage
                layers={OnlyHomeSidebarData}
                pages={OtherSidebarData.slice(0, 3)}
                content={
                    <div>
                        <h1>Support</h1>
                    </div>
                }
            />
        );
    }
}

export default Support;
