import Collapse from "react-bootstrap/Collapse";
import {CompactPicker} from "react-color";
import React from "react";


class Classes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            water: "#1357ae",
            field: "#808000",
            tree: "#183215",
            ground: "#800000",
            infrastructure: "#808080",
            vegetation: "#008000",

            colorModalShow: false,
            changeColorFor: '',

            changed: false,
        }

        this.classesList = [
            {value: 'water', label: 'Water', color: this.state.water},
            {value: 'ground', label: 'Ground', color: this.state.ground},
            {value: 'field', label: 'Fields', color: this.state.field},
            {value: 'tree', label: 'Trees', color: this.state.tree},
            {value: 'vegetation', label: 'Vegetation', color: this.state.vegetation},
            {value: 'infrastructure', label: 'Infrastructure', color: this.state.infrastructure}
        ]
    }

    render() {
        return (
            <div>
                <div className="container-fluid" style={{padding: 0}}>
                    <div key={0}>
                        <table style={{width: "100%"}}
                               onClick={() => {
                                   this.setState({
                                       colorModalShow: !this.state.colorModalShow,
                                       changeColorFor: this.classesList[0]
                                   });
                               }}>
                            <td>
                                <th style={{fontWeight: "normal"}}>{this.classesList[0].label}</th>
                                <th>
                                    <div className="color-square"
                                         style={{backgroundColor: this.classesList[0].color}}/>
                                </th>
                            </td>
                        </table>
                        <Collapse
                            in={this.state.colorModalShow && this.state.changeColorFor.value === this.classesList[0].value}>
                            <div className="container-fluid color-picker" style={{width: "100%", padding: 0}}>
                                <CompactPicker triangle="top-right" width="107%"
                                              onChange={(color, event) => {
                                                  this.classesList[0].color = color.hex;
                                                  this.setState({changed: !this.state.changed});
                                                  console.log(this.onChange)
                                                  this.props.onChange({water: color.hex})
                                              }}/>
                            </div>
                        </Collapse>
                    </div>

                    <div key={1}>
                        <table style={{width: "100%"}}
                               onClick={() => {
                                   this.setState({
                                       colorModalShow: !this.state.colorModalShow,
                                       changeColorFor: this.classesList[1]
                                   });
                               }}>
                            <td>
                                <th style={{fontWeight: "normal"}}>{this.classesList[1].label}</th>
                                <th>
                                    <div className="color-square"
                                         style={{backgroundColor: this.classesList[1].color}}/>
                                </th>
                            </td>
                        </table>
                        <Collapse
                            in={this.state.colorModalShow && this.state.changeColorFor.value === this.classesList[1].value}>
                            <div className="container-fluid color-picker" style={{width: "100%", padding: 0}}>
                                <CompactPicker triangle="top-right" width="107%"
                                              onChange={((color, event) => {
                                                  this.classesList[1].color = color.hex;
                                                  this.setState({changed: !this.state.changed});
                                                  this.props.onChange({ground: color.hex})
                                              })}/>
                            </div>
                        </Collapse>
                    </div>

                    <div key={2}>
                        <table style={{width: "100%"}}
                               onClick={() => {
                                   this.setState({
                                       colorModalShow: !this.state.colorModalShow,
                                       changeColorFor: this.classesList[2]
                                   });
                               }}>
                            <td>
                                <th style={{fontWeight: "normal"}}>{this.classesList[2].label}</th>
                                <th>
                                    <div className="color-square"
                                         style={{backgroundColor: this.classesList[2].color}}/>
                                </th>
                            </td>
                        </table>
                        <Collapse
                            in={this.state.colorModalShow && this.state.changeColorFor.value === this.classesList[2].value}>
                            <div className="container-fluid color-picker" style={{width: "100%", padding: 0}}>
                                <CompactPicker triangle="top-right" width="107%"
                                              onChange={(color, event) => {
                                                  this.classesList[2].color = color.hex;
                                                  this.setState({changed: !this.state.changed});
                                                  this.props.onChange({field: color.hex})
                                              }}/>
                            </div>
                        </Collapse>
                    </div>

                    <div key={3}>
                        <table style={{width: "100%"}}
                               onClick={() => {
                                   this.setState({
                                       colorModalShow: !this.state.colorModalShow,
                                       changeColorFor: this.classesList[3]
                                   });
                               }}>
                            <td>
                                <th style={{fontWeight: "normal"}}>{this.classesList[3].label}</th>
                                <th>
                                    <div className="color-square"
                                         style={{backgroundColor: this.classesList[3].color}}/>
                                </th>
                            </td>
                        </table>
                        <Collapse
                            in={this.state.colorModalShow && this.state.changeColorFor.value === this.classesList[3].value}>
                            <div className="container-fluid color-picker" style={{width: "100%", padding: 0}}>
                                <CompactPicker triangle="top-right" width="107%"
                                              onChange={(color, event) => {
                                                  this.classesList[3].color = color.hex;
                                                  this.setState({changed: !this.state.changed});
                                                  this.props.onChange({tree: color.hex})
                                              }}/>
                            </div>
                        </Collapse>
                    </div>

                    <div key={4}>
                        <table style={{width: "100%"}}
                               onClick={() => {
                                   this.setState({
                                       colorModalShow: !this.state.colorModalShow,
                                       changeColorFor: this.classesList[4]
                                   });
                               }}>
                            <td>
                                <th style={{fontWeight: "normal"}}>{this.classesList[4].label}</th>
                                <th>
                                    <div className="color-square"
                                         style={{backgroundColor: this.classesList[4].color}}/>
                                </th>
                            </td>
                        </table>
                        <Collapse
                            in={this.state.colorModalShow && this.state.changeColorFor.value === this.classesList[4].value}>
                            <div className="container-fluid color-picker" style={{width: "100%", padding: 0}}>
                                <CompactPicker triangle="top-right" width="107%"
                                              onChange={(color, event) => {
                                                  this.classesList[4].color = color.hex;
                                                  this.setState({changed: !this.state.changed});
                                                  this.props.onChange({vegetation: color.hex})
                                              }}/>
                            </div>
                        </Collapse>
                    </div>

                    <div key={5}>
                        <table style={{width: "100%"}}
                               onClick={() => {
                                   this.setState({
                                       colorModalShow: !this.state.colorModalShow,
                                       changeColorFor: this.classesList[5]
                                   });
                               }}>
                            <td>
                                <th style={{fontWeight: "normal"}}>{this.classesList[5].label}</th>
                                <th>
                                    <div className="color-square"
                                         style={{backgroundColor: this.classesList[5].color}}/>
                                </th>
                            </td>
                        </table>
                        <Collapse
                            in={this.state.colorModalShow && this.state.changeColorFor.value === this.classesList[5].value}>
                            <div className="container-fluid color-picker" style={{width: "100%", padding: 0}}>
                                <CompactPicker triangle="top-right" width="107%"
                                              onChange={(color, event) => {
                                                  this.classesList[5].color = color.hex;
                                                  this.setState({changed: !this.state.changed});
                                                  this.props.onChange({infrastructure: color.hex})
                                              }}/>
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>
        )
    }
}

export default Classes;
