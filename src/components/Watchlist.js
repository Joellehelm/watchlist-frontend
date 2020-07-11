import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWatchlist } from '../actions/watchlistActions';
import WatchListCard from './WatchListCard'
import '../style/watchlist.scss'
class Watchlist extends Component {

    componentDidMount() {
        this.props.getWatchlist()
    }

    mapShows = () => {
        console.log(this.props.watchlist.watchlist.shows)
        if(this.props.watchlist.watchlist.shows){
            return this.props.watchlist.watchlist.shows.map(show => {
                const structuredShow = {
                    Poster: show.poster,
                    Title: show.name,
                    Year: show.year,
                    Type: show.movie_or_show,
                    imdbID: show.imdbID
                }
                return <WatchListCard history={this.props.history} show={structuredShow} key={`${show.imdbId} ${show.name}`}/>
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
    watchlist: state.watchlist
})

const mapDispatchToProps = {
    getWatchlist
}



export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);