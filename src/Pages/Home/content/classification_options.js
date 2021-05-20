import React from 'react';
import Select from 'react-select';

import './classification_options.css'
import Collapse from "react-bootstrap/Collapse";
import * as BsIcons from 'react-icons/bs';
import Container from "react-bootstrap/Container";
import Classes from "./classes_list";

class ClassificationOptions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            paletteOpen: false,
        }

        this.classesList = [
            {value: 'water', label: 'Water'},
            {value: 'ground', label: 'Ground'},
            {value: 'field', label: 'Fields'},
            {value: 'tree', label: 'Trees'},
            {value: 'vegetation', label: 'Vegetation'},
            {value: 'infrastructure', label: 'Infrastructure'}
        ]
    }

    kernelOptions = [
        {value: 'linear', label: 'Linear'},
        {value: 'polynomial', label: 'Polynomial'},
        {value: 'rbf', label: 'RBF'},
        {value: 'sigmoid', label: 'Sigmoid'}
    ]


    render() {
        return (
            <>
                <div className='container-fluid' style={{padding: "20px", borderBottom: "2px solid #013220"}}>
                    <div id="kernel-info-row" style={{margin: "0!important", color: "black"}}>
                        SVM Kernel:
                    </div>
                    <Select className="select-kernel"
                            onChange={(event) => {
                                console.log(event);
                                this.props.onKernelChange(event.value)
                            }}
                            options={this.kernelOptions}
                    />


                    <Container id="open-palette-button"
                               onClick={() => this.setState({paletteOpen: !this.state.paletteOpen})}
                               aria-expanded={this.state.paletteOpen}>
                        <table style={{width: "100%"}}>
                            <tbody>
                            <tr>
                                <th style={{fontWeight: "normal"}}>Color Palette</th>
                                <th style={{width: "15%"}}>
                                    {(this.state.paletteOpen
                                        ? <BsIcons.BsChevronUp/>
                                        : <BsIcons.BsChevronDown/>)}
                                </th>
                            </tr>
                            </tbody>
                        </table>
                    </Container>
                    <Collapse in={this.state.paletteOpen}>
                        <div className="container-fluid" style={{padding: 0}}>
                            <Classes onChange={this.props.onPaletteChange}/>
                        </div>
                    </Collapse>

                </div>
            </>
        )
    }
}

export default ClassificationOptions;
