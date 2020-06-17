import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchShows from './SearchShows'
import Shows from './Shows'
import '../style/Home.css'


class Home extends Component {
    constructor(){
        super()
        this.state = {
            shows: []
        }
    }


   showSearch = (term) => {
    fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${term}`)
    .then(r => r.json())
    .then(response => {
        console.log("showsearch function response below")
        console.log(response)
        this.setState({shows: response.Search})
        
    })
    .catch(error => console.log('API Errors:', error))
  };
   
  
    render() {
        return (
            <div className="home-container">
                <div>placeholder for carosel</div>
                <SearchShows showSearch={this.showSearch} />
                <div className="showsContainer">
                <Shows shows={this.state.shows} />
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Home);