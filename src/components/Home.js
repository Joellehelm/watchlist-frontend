import React, { Component } from 'react';
import SearchShows from './SearchShows'
import Shows from './Shows'
import '../style/Home.css'


class Home extends Component {
    constructor() {
        super()
        this.state = {
            shows: [],
            showsContainer: "shows-container-hidden"
        }
    }



    showContainerSlide = (event) => {
        this.setState({ showsContainer: "shows-container" })
    }

    showSearch = (term) => {
        fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${term}`)
            .then(r => r.json())
            .then(response => {
                this.setState({ shows: response.Search, searched: true })

            })
            .catch(error => console.log('API Errors:', error))

    };


    render() {
        return (
            <div className="home-container">
                <div className="home-box">
                    <div className="search-bar-container">

                        <SearchShows showContainerSlide={this.showContainerSlide} showSearch={this.showSearch} />
                    </div>
                    <div className={this.state.showsContainer}>
                        <Shows history={this.props.history} shows={this.state.shows} />
                    </div>
                </div>
            </div>
        );
    }
}


export default Home;