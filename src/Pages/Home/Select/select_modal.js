import React from "react";
import './select_modal.css';
import {Datasets} from './datasets';

class SelectModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            n: 6,
            onSelected: props.onSelected,
            items: []
        }
    }

    highlight(i) {
        this.state.onSelected(i);
    }

    render() {
        this.state.items = [];
        for (let i = 0; i < this.state.n; i++) {
            this.state.items.push(
                <div key={i} className="item col-lg-4 col-md-4 col-sm-6" onClick={() => this.highlight(i)}>
                    <div className={"wrapper"}>
                        <div className={"background"} style={{backgroundImage: `url(${Datasets[i].preview})`}}/>
                    </div>
                    <div className={"content item" + 1}>
                        {Datasets[i].text}
                    </div>
                </div>
            )
        }

        return (
            <div className="container">
                <div className="row">
                    {this.state.items}
                </div>
            </div>
        )
    }
}

export default SelectModal;
