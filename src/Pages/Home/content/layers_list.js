import React from "react";

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
            <div>
                {
                    this.state.reverse
                        ? (
                            <>
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
                            </>
                        )
                        : (
                            <>
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
                            </>
                        )
                }
                <button onClick={this.handleReverse.bind(this)}>swap</button>
            </div>
        )
    }

}

export default LayersList
