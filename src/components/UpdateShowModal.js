import React, { Component } from 'react';
import { Header, Modal, Button, TransitionablePortal, Dropdown } from 'semantic-ui-react'

class UpdateShowModal extends Component {
  constructor() {
    super()
    this.state = {
      duration: 500,
      animation: "zoom",
      loading: false,
      dropdownSelection: ""
    }
  }

  handleModal = () => {
    this.props.openOrCloseEditModal()
  }

  updateShow = () => {
    const show = { id: this.props.show.id, update_type: 'info' }

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/update_show_info`, {
      method: "POST",
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `JWT ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ show })
  })
      .then(r => r.json())
      .then(response => {
        // TODO: success message or notification here
          console.log(response)
      })
  }

  updateSeason = () => {
    const season = { season_number: this.state.dropdownSelection, show_id: this.props.show.id, update_type: 'season' }

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/update_season`, {
      method: "POST",
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `JWT ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ season })
  })
      .then(r => r.json())
      .then(response => {
          // TODO: success message or notification here
          console.log(response)
      })
  }

  render() {
    const { animation, duration } = this.state
    const { open } = this.props

    return (
      <TransitionablePortal open={open} transition={{ animation, duration }}>
        <Modal open={true} onClose={this.handleModal} centered={true} size={"large"} closeIcon={{ style: { top: '1.0535rem', right: '1rem' }, color: 'black', name: 'close' }}>
          <Modal.Header >{this.props.show.name}</Modal.Header>
              <div className="update-modal-content">
                <div className="modal-inner">
                  <Header>
                    Update Show/Movie Info
                    <p className="update-show-description">The button below will update a movie or show's year, imdb rating, awards, poster, and add any missing seasons.</p>
                  </Header>
                  <Button className={'update-modal-button'} onClick={this.updateShow}>Update Info</Button>
                </div>

                {this.props.show.movie_or_show === "series" ?
              
                  <div className="modal-inner">
                    <Header>
                      Update specific Season
                      <p className="update-show-description">The Dropdown below can be used to update specific seasons. This can be used to add missing episodes to a season and update an episode's name, imdb rating, and release date.</p>
                    </Header>
                    <Dropdown selection className="update-show-dropdown" scrolling placeholder="Select Season" options={this.props.mappedSeasons} onChange={(e, { value }) => this.setState({ dropdownSelection: value })}/>
                    <Button className="update-season-submit" onClick={this.updateSeason}>Update</Button>
                  </div>
                  :
                  <></>
                }
              </div>
        </Modal>
      </TransitionablePortal>

    );
  }
}


export default UpdateShowModal;

