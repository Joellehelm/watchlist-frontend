import React, { Component } from 'react';
import ShowCard from './ShowCard'
import '../style/Shows.scss'

class Shows extends Component {
 
    mapShows = () => {
        if(this.props.shows.length > 0){
            return this.props.shows.map(show => <ShowCard history={this.props.history} show={show} imdbID={show.imdbID} key={show.imdbID} />)
        }
    }

    render() {
        return (
            <div className="shows">
                {this.mapShows()}
            </div>
        );
    }
}


export default Shows;