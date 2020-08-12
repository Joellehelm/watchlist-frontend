import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import '../style/ShowProgress.css'

class Season extends Component {
    constructor() {
        super()
        this.state = {
            seasons: []
        }
    }


    componentDidMount() {
        console.log(this.props)
        const seasons = parseInt(this.props.seasons)
        this.setState({ seasons: Array.from(Array(seasons), (_, i) => i + 1) })
    }



    render() {


        return (
            <div className="season-container">

                <DropdownButton onSelect={this.props.seasonSelect} id="dropdown-basic-button" title="Season" drop="up">
                    {this.state.seasons.map(s => (<Dropdown.Item eventKey={s} key={s}>Season {s}</Dropdown.Item>))}
                </DropdownButton>

            </div>
        );
    }
}

export default Season;