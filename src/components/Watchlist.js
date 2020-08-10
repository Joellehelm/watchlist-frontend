import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWatchlist, getShowProgress } from '../actions/watchlistActions';
import ShowCard from './ShowCard'
import '../style/watchlist.scss'
class Watchlist extends Component {

    componentDidMount() {
        this.props.getWatchlist()
    }

    handleClick = (show) => {
        this.props.getShowProgress(this.props.auth.user.id, show.imdbID)
        this.props.history.push('/show-progress')
    }

    mapShows = () => {
        if(this.props.watchlist.watchlist.shows){
            return this.props.watchlist.watchlist.shows.map(show => {
                const structuredShow = {
                    Poster: show.poster,
                    Title: show.name,
                    Year: show.year,
                    Type: show.movie_or_show,
                    imdbID: show.imdbID
                }
                return <ShowCard history={this.props.history} handleClick={this.handleClick} show={structuredShow} key={`${show.imdbId} ${show.name}`}/>
            })
        }
    }


    render() {
        return (
            <div className="watchlist-container">
                <div className="watchlist-inner">
                    {this.mapShows()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    watchlist: state.watchlist,
    auth: state.auth
})

const mapDispatchToProps = {
    getWatchlist,
    getShowProgress
}



export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);