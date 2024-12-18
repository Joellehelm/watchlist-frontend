import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Popup, Button } from 'semantic-ui-react'
import { viewShow } from '../actions/showActions'
import ConfirmationPopup from './ConfirmationPopup'
import skullCoin from '../style/skull.png'
import '../style/ShowProgress.css'
import Season from './Season'
import Episodes from './Episodes'
import ShowModal from './ShowModal'
import UpdateShowModal from './UpdateShowModal'

class ShowProgress extends Component {
  _isMounted = false;
  constructor() {
    super()
    this.state = {
      seasonNum: "",
      episodes: [],
      openModal: false,
      openEditModal: false,
      confirmPopup: false,
      mappedSeasons: []
    }
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  seasonSelect = (event) => {
    this.setState({ seasonNum: event })
    this.getEpisodes(event)
  }

  getEpisodes = (seasonNum) => {
    const show = this.props.progress.showProgress.show.show

    const season = show.seasons.find(s => s?.season_number === parseInt(seasonNum))
    this.setState({ episodes: season.episodes })
  }

  openOrCloseModal = () => {
    this.props.viewShow(this.props.progress.showProgress.show.show)
    this.setState({ openModal: !this.state.openModal })
  }

  openOrCloseEditModal = () => {
    this.mapSeasons()
    this.setState({ openEditModal: !this.state.openEditModal })
  }

  removeConfirmation = () => {
    this.setState({ confirmPopup: true })
  }

  removeFromWatchlist = () => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/user_shows/${this.props.progress.showProgress.show.user_show.id}`, {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `JWT ${localStorage.getItem('token')}`
      }
    })
      .then(r => r.json())
      .then(response => {
        this.props.history.push('/watchlist')
        this.closePopup()
      })
  }

  closePopup = () => {
    this.setState({ confirmPopup: false })
  }

  mapSeasons = () => {
    const totalSeasons = this.props.progress.showProgress.show.show.seasons.length

    const seasons = []

    for (let i = 1; i <= totalSeasons; i++) {
      seasons.push({ key: `${i}season`, text: `Season ${i}`, value: i })
    }

    this.setState({ mappedSeasons: seasons })
  }

  render() {
    const showProgress = this.props.progress.showProgress.progress
    // TODO: check that safe navigation operator is needed here.
    const show = this.props?.progress?.showProgress?.show?.show

    return (
      <>
        <ShowModal openOrCloseModal={this.openOrCloseModal} open={this.state.openModal} />
        {show ?
          <UpdateShowModal show={show} mappedSeasons={this.state.mappedSeasons} openOrCloseEditModal={this.openOrCloseEditModal} open={this.state.openEditModal} />
          :
          <></>
        }
        <ConfirmationPopup removeFromWatchlist={this.removeFromWatchlist} closePopup={this.closePopup} confirm={this.state.confirmPopup} />
        <div className="show-progress-wrapper">
          {show ?
            <div className="show-progress-container">
              <div className="show-progress-inner">
                <div className="show-container">

                  <div className="show-box">
                    <div className="watchlist-table-title"><p className="styled-text">{show.name}</p></div>
                    <div className="show-box-inner">
                      <img className="watchlist-poster" src={show.poster} alt={show.name + " show poster"} />
                      <div className="show-box-details">
                        <div className="watchlist-header-container">
                          <p className="watchlist-details-header">{show.genre}</p>
                          <p className="watchlist-show-year">{show.year}</p>
                        </div>

                        <div className="watchlist-buttons-container">
                          <Button onClick={this.openOrCloseModal}>Show Details</Button>
                          <Button onClick={this.removeConfirmation}>Remove From Watchlist</Button>
                          <Popup content="If a show's information is out of date you can click this button to update it."
                            trigger={
                              <div className="update-show-popup">
                                <Button className={'update-show-button'} onClick={this.openOrCloseEditModal}>Update Show</Button>
                              </div>
                            } />
                        </div>

                        <div className="watchlist-details-bottom">

                          <Popup content='IMDB Rating' trigger={<div className="modal-rating" onClick={() => window.open(`https://www.imdb.com/title/${show.imdbID}`)}><img className="rating-icon" src={skullCoin} alt="Pirate coin" />  {show.imdbRating}/10</div>} />

                          <div className="total-seasons">
                            <p>Total Seasons: {show.total_seasons}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Season seasons={show.seasons} seasonSelect={this.seasonSelect} />
                </div>
                <Episodes episodes={this.state.episodes} showName={show.name} seasonNum={this.state.seasonNum} />
              </div>
              <div className="current-progress">
                <div className="progress-left"><p className="progress-divider">Current Progress</p></div>
                <div className="progress-inner-container">
                  {showProgress.length > 0 ?

                    <div className="progress-inner">
                      <p>Season {showProgress[showProgress.length - 1].season?.season_number}</p>
                      <p>Episode {showProgress[showProgress.length - 1].episode?.episode_num}</p>
                    </div>

                    :
                    <p className="select-a-season">Select a season and episode to save your progress.</p>
                  }
                </div>
              </div>
            </div>
            :
            null
          }
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  progress: state.showProgress
})

const mapDispatchToProps = {
  viewShow,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowProgress);