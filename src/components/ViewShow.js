import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/viewShow.scss'


class ViewShow extends Component {
    constructor() {
        super()
        this.state = {
            showInfo: []
        }
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${this.props.show.imdbID}`)
            .then(r => r.json())
            .then(response => {
                console.log(response)
                this.setState({ showInfo: response })
            })
    }

    getTotalSeasons = () => {
        const seasonNum = this.state.showInfo.totalSeasons
        if(seasonNum === undefined || seasonNum === "N/A"){
            return 0
        }else{
            return seasonNum
        }
    }


    addToWatchList = (event) => {
        event.preventDefault()
        const showInfo = this.state.showInfo
        const showObj = {
            user_id: this.props.user.user.id,
            name: showInfo.Title,
            genre: showInfo.Genre,
            poster: showInfo.Poster,
            imdbID: showInfo.imdbID,
            total_seasons: this.getTotalSeasons(),
            year: showInfo.Year,
            movie_or_show: showInfo.Type,
            imdbRating: showInfo.imdbRating,
            actors: showInfo.Actors,
            awards: showInfo.Awards
        }
        console.log("SHOW OBJECT", showObj)
        fetch('http://localhost:3000/shows', {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `JWT ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(showObj)
        })
    }


    render() {
        return (
            <div className="viewShowContainer">
                <div className="viewShowTitle">{this.props.show.Title}</div>

                <div className="viewShowInner">
                    <div className="viewShowPoster"><img src={this.props.show.Poster} alt={this.props.show.Title + " show poster"} /></div>
                    <div className="showInfo">

                        <p>Rated: {this.state.showInfo.Rated}</p>
                        <p>Year: {this.state.showInfo.Year}</p>
                        <p>IMDB Rating: {this.state.showInfo.imdbRating}</p>
                        <p>Total Seasons: {this.state.showInfo.totalSeasons}</p>
                        <p>Actors: {this.state.showInfo.Actors}</p>
                        <p>Awards: {this.state.showInfo.Awards}</p>
                        <p>Genre: {this.state.showInfo.Genre}</p>
                        <p>Plot: {this.state.showInfo.Plot}</p>


                    </div>
                </div>

                <button onClick={this.addToWatchList}>Add to Watch List</button>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    show: state.viewShow.show,
    user: state.auth
})


export default connect(mapStateToProps)(ViewShow);
