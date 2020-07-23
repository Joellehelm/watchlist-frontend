import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        this.setState({showsContainer: "shows-container"})
    }

    showSearch = (term) => {
        // this.setState({shows: []})
        // for(let i = 1; i <= 3; i++){
        //     fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${term}&page=${i}`)
        //     .then(r => r.json())
        //     .then(response => {
        //         console.log(response)
        //         this.setState({shows: [...response.Search, ...this.state.shows]})

        //     })
        //     .catch(error => console.log('API Errors:', error))
        // }
      
        fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${term}`)
        .then(r => r.json())
        .then(response => {
            this.setState({shows: response.Search})
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

const mapStateToProps = (state) => ({
    auth: state.auth
})



export default connect(mapStateToProps)(Home);