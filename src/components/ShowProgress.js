import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/ShowProgress.css'
import Season from './Season'
import Episode from './Episode'



class ShowProgress extends Component {

    componentDidMount() {
        console.log("Show Progress...", this.props)
    }


    render() {
        console.log(this.props.progress)
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

                                <Season seasons={show.total_seasons} />
                            </div>
                            <Episode />
                        </div>
                        <div className="current-progress">
                            Current Progress
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