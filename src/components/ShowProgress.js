import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/ShowProgress.css'
import Season from './Season'
import Episodes from './Episodes'

class ShowProgress extends Component {
    constructor() {
        super()
        this.state = {
            seasonNum: "",
            episodes: []
        }
    }

    seasonSelect = (event) => {
        this.setState({ seasonNum: event })
        this.getEpisodes(event)
    }

    // Realized I already have an array of all episods in a season and this is not necessary.
    // Refactor this later.

    getEpisodes = (seasonNum) => {
        const currentShowName = this.props.progress.showProgress.show.name
        const show = this.props.progress.watchlist.shows.find(show => show["name"] === currentShowName);
        const episodes = show.seasons.find(season => season.season_number === parseInt(seasonNum)).episodes;
        this.setState({ episodes: episodes })

    }

    render() {
        const showProgress = this.props.progress.showProgress.progress
        const show = this.props.progress.showProgress.show
        return (
            <div>
                {show ?
                    <div className="show-progress-container">
                        <div className="show-progress-inner">
                            <div className="show-container">

                                <div className="show-box">
                                    <p>{show.name}</p>
                                    <div className="show-box-inner">
                                        <img src={show.poster} alt={show.name + " show poster"} />
                                        <div className="show-box-details">
                                            <p>{show.actors}</p>
                                            <p>{show.awards}</p>
                                            <p>{show.genre}</p>
                                            <p>{show.imdbID}</p>
                                            <p>{show.imdbRating}</p>
                                            <p>{show.movie_or_show}</p>
                                            <p>{show.plot}</p>
                                            <p>{show.total_seasons}</p>
                                            <p>{show.year}</p>
                                        </div>
                                    </div>
                                </div>

                                <Season seasons={show.total_seasons} seasonSelect={this.seasonSelect} />
                            </div>
                            <Episodes episodes={this.state.episodes} showName={show.name} seasonNum={this.state.seasonNum} />
                        </div>
                        <div className="current-progress">
                            Current Progress
                            <div className="progress-inner">
                                {showProgress.length > 0 ?
                                    <div>
                                    <p>Season {showProgress[showProgress.length - 1].season.season_number}</p>
                                    <p>Episode {showProgress[showProgress.length - 1].episode.episode_num}</p>
                                    </div>
                                    :
                                    <p>Select a season and episode to save your progress.</p>
                                }
                            </div>
                        </div>
                    </div>
                    :
                    null

                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    progress: state.showProgress
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ShowProgress);