import React from "react";
import * as BsIcons from "react-icons/bs";

class LayersList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            original: true,
            classified: true,
            reverse: false,
        }
    }

    handleOriginalChange(e) {
        this.setState({original: e.target.checked})
        this.props.onOriginalChanged(e.target.checked)
    }

    handleClassifiedChange(e) {
        this.setState({classified: e.target.checked})
        this.props.onClassifiedChanged(e.target.checked)
    }

    async handleReverse() {
        await this.props.onReverse(!this.state.reverse)
        await this.setState({reverse: !this.state.reverse})
    }


    render() {
        return (
            <table style={{width: "100%"}}>
                <tbody>
                <tr>
                    <th style={{fontWeight: "normal"}}>
                        {this.state.reverse
                            ? (
                                <div>
                                    <div>
                                        <input type="checkbox"
                                               checked={this.state.original}
                                               onChange={this.handleOriginalChange.bind(this)}/> Original
                                    </div>
                                    <div>
                                        <input type="checkbox"
                                               checked={this.state.classified}
                                               onChange={this.handleClassifiedChange.bind(this)}/> Classified
                                    </div>
                                </div>
                            )
                            : (
                                <div>
                                    <div>
                                        <input type="checkbox"
                                               checked={this.state.classified}
                                               onChange={this.handleClassifiedChange.bind(this)}/> Classified
                                    </div>
                                    <div>
                                        <input type="checkbox"
                                               checked={this.state.original}
                                               onChange={this.handleOriginalChange.bind(this)}/> Original
                                    </div>
                                </div>
                            )
                        }
                    </th>
                    <th style={{width: "15%"}}>
                        <button className="swap-btn" onClick={this.handleReverse.bind(this)}>Swap</button>
                    </th>
                </tr>
                </tbody>
            </table>
        )
    }

}

export default LayersList
