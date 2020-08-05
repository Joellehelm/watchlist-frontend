import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getShowProgress } from '../actions/watchlistActions'


class WatchListCard extends Component {
    
    handleClick = () => {

        this.props.getShowProgress(this.props.auth.user.id, this.props.show.imdbID)
        this.props.history.push('/show-progress')
    }

    render() {
        return (
            <div className="showCard" onClick={this.handleClick}>
                <div className="moviePosterContainer">
                <img src={this.props.show.Poster} alt={this.props.show.Title + " show poster"} />
                </div>
                    <div className="cardBody">
                    <div className="cardTitle">{this.props.show.Title}</div>
                    <div>Type: {this.props.show.Type}</div>
                    <div>Year: {this.props.show.Year}</div>
                </div>
            </div>
           
        );
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth
  })
  
  const mapDispatchToProps = {
    getShowProgress
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(WatchListCard);