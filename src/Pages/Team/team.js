import React from "react";

import TemplatePage from "../template";
import {OnlyHomeSidebarData, OtherSidebarData} from "../../Menu/sidebar_data";

class Team extends React.Component {
    render() {
        return (
            <TemplatePage
                layers={OnlyHomeSidebarData}
                pages={[OtherSidebarData[0]].concat(OtherSidebarData.slice(2))}
                content={
                    <div>
                        <h1>Team</h1>
                    </div>
                }
            />
        );
    }
}

export default Team;
