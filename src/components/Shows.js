import React, { Component } from 'react';
import ShowCard from './ShowCard'
import '../style/Shows.scss'
import { connect } from 'react-redux'
import ShowModal from './ShowModal'
import { viewShow } from '../actions/showActions'



class Shows extends Component {
  constructor() {
    super()
    this.state = {
      openModal: false
    }
  }

  handleClick = (show) => {
    this.props.viewShow(show)
    this.openOrCloseModal()

  }


  mapShows = () => {
    if (this.props.shows === undefined) {
      return <div className="no-search-results"><p>No Results...</p></div>
    } else {
      return this.props.shows.map(show => <ShowCard handleClick={this.handleClick} history={this.props.history} show={show} key={show.imdbID} />)
    }
  }


  openOrCloseModal = () => {
    this.setState({ openModal: !this.state.openModal })
  }

  render() {
    return (
      <>
        <ShowModal openOrCloseModal={this.openOrCloseModal} open={this.state.openModal} />

        <div className="shows">
          {this.mapShows()}
        </div>

      </>
    );
  }
}


const mapStateToProps = (state) => ({
  show: state.viewShow.show,
  user: state.auth
})

const mapDispatchToProps = {
  viewShow
}


export default connect(mapStateToProps, mapDispatchToProps)(Shows);

