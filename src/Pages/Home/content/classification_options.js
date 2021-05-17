import React from 'react';
import * as IoIcons from 'react-icons/io5';
import Select from 'react-select';

import './classification_options.css'
import Collapse from "react-bootstrap/Collapse";
import * as BsIcons from 'react-icons/bs';
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";

import {GithubPicker, SketchPicker} from 'react-color';
import Classes from "./classes_list";

class ClassificationOptions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            kernel: this.kernelOptions[0],
            paletteOpen: false,

            water: "#1357ae",
            field: "#808000",
            tree: "#183215",
            ground: "#800000",
            infrastructure: "#808080",
            vegetation: "#008000",

            colorModalShow: false,
            changeColorFor: '',
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

    kernelOptions = [
        {value: 'linear', label: 'Linear', info: ''},
        {value: 'polynomial', label: 'Polynomial', info: 'https://en.wikipedia.org/wiki/Polynomial_kernel'},
        {value: 'rbf', label: 'RBF', info: 'https://en.wikipedia.org/wiki/Radial_basis_function_kernel'},
        {value: 'sigmoid', label: 'Sigmoid', info: ''}
    ]

    handleCloseColor = () => {
        this.setState({
            colorModalShow: false,
        });
    };

    handleShowColor = () => {
        this.setState({
            colorModalShow: true,
        });
    }

    render() {
        return (
            <>
                <div className='container-fluid' style={{padding: "20px", borderBottom: "2px solid #013220"}}>
                    <div id="kernel-info-row" style={{margin: "0!important", color: "black"}}>
                        SVM Kernel:
                        <button className="kernel-info">
                            <IoIcons.IoInformationSharp
                                className="kernel-info-icon"
                                onClick={() => this.setState({showKernelInfo: !this.state.showKernelInfo})}/>
                        </button>
                    </div>
                    <Select className="select-kernel"
                            onChange={() => this.setState({kernel: this.kernelOptions[this.selectedIndex - 1]})}
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
