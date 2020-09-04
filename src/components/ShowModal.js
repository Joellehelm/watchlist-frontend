import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Image, Modal, Button, Popup, TransitionablePortal } from 'semantic-ui-react'
import skullCoin from '../style/skull.png'
import filmPlaceholder from '../style/film-placeholder.png'
import Spyglass from '../style/spyglass.svg'

class ShowModal extends Component {
  constructor() {
    super()
    this.state = {
      duration: 500,
      animation: "zoom",
      loading: false
    }
  }



  getTotalSeasons = () => {
    const seasonNum = this.props.show.totalSeasons
    if (seasonNum === undefined || seasonNum === "N/A") {
      return 0
    } else {
      return seasonNum
    }
  }


  addToWatchList = (event) => {
    event.preventDefault()

    this.setState({loading: true})

    const showInfo = this.props.show
    const showObj = {
      user_id: this.props.user.user.id,
      name: showInfo.Title,
      genre: showInfo.Genre,
      poster: showInfo.Poster,
      imdbID: showInfo.imdbID,
      total_seasons: this.getTotalSeasons(),
      year: showInfo.Year,
      movie_or_show: showInfo.Type,
      plot: showInfo.Plot,
      imdbRating: showInfo.imdbRating,
      actors: showInfo.Actors,
      awards: showInfo.Awards
    }

    // fetch('http://localhost:3000/shows', {
      fetch('https://xmarkbackend.herokuapp.com/shows', {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `JWT ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(showObj)
    })
      .then(r => r.json())
      .then(response => {
        if (response.id) {
          this.setState({ success: true })
        }
        this.setState({loading: false})
      })
      .catch(err => {console.log("You can't add the same show more than once to your watchlist.")})
  }

  handleModal = () => {
    this.setState({success: false})
    this.props.openOrCloseModal()
  }


  render() {
    const { animation, duration } = this.state
    const { open } = this.props
    return (
      
      <TransitionablePortal open={open} transition={{ animation, duration }}><Modal open={true} onClose={this.handleModal} centered={true} size={"large"} closeIcon={{ style: { top: '1.0535rem', right: '1rem' }, color: 'black', name: 'close' }}>
        <Modal.Header >{this.props.show.Title}</Modal.Header>
        <Modal.Content image>
          <div className="modal-left">
            <Image centered wrapped bordered onError={(e) => { e.target.onerror = null; e.target.src = filmPlaceholder }} src={this.props.show.Poster} />
            {this.props.show.totalSeasons ?
              <div className="modal-total-seasons"><p>Total Seasons: {this.props.show.totalSeasons}</p></div>
              :
              <div className="modal-total-seasons"><p>Movie Runtime: {this.props.show.Runtime}</p></div>
            }
          </div>
          <Modal.Description>
            <Header>
              {this.props.show.Genre}
              <p className="show-year">{this.props.show.Year}</p>
            </Header>
            <div className="modal-description">
              <div className="modal-top">
                <p className="plot-text">{this.props.show.Plot}</p>
                <br />
                <p className="bold-description">Actors</p>
                <p>{this.props.show.Actors}</p>
                <br />
                <p className="bold-description">Awards</p>
                <p>{this.props.show.Awards}</p>
                <br />

              </div>
              <div className="modal-bottom">
                <Popup content='IMDB Rating' trigger={<div className="modal-rating"><img className="rating-icon" src={skullCoin} alt="Pirate coin" />  {this.props.show.imdbRating}/10</div>} />

 
                {this.props.show.inWatchlist || this.state.success ?
                  <div className="spyglass-container">
                    <img className="spyglass-icon" src={Spyglass} alt="spyglass icon" />
                    <span>Watching</span>
                  </div>

                  :
                  <Button loading={this.state.loading} onClick={this.addToWatchList} className="modal-button">Add to Watchlist</Button>
                }
              </div>
            </div>

          </Modal.Description>
        </Modal.Content>
      </Modal></TransitionablePortal>

    );
  }
}


const mapStateToProps = (state) => ({
  user: state.auth,
  show: state.viewShow.show,
  watchlist: state.watchlist
})



export default connect(mapStateToProps)(ShowModal);

