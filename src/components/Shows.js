import React, { Component } from 'react';
import ShowCard from './ShowCard'

class Shows extends Component {
 
    mapShows = () => {
        console.log("map shows")
        if(this.props.shows.length > 0){
            return this.props.shows.map(show => <ShowCard show={show} key={show.imdb_id} />)
        }
    }

    render() {
        return (
            <div>
                {this.mapShows()}
            </div>
        );
    }
}


export default Shows;