import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import '../style/ShowProgress.css'

class Season extends Component {
    render() {
        return (
        <>
        {this.props.seasons ?
            <div className="season-container">

                <DropdownButton onSelect={this.props.seasonSelect} id="dropdown-basic-button" title="Season" drop="up">
                    {this.props.seasons.map(s => (<Dropdown.Item eventKey={s.season_number} key={s.season_number}>Season {s.season_number}</Dropdown.Item>))}
                </DropdownButton>

            </div>
            :
            null
    }
            </>

        );
    }
}

export default Season;