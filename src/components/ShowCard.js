import React, { Component } from 'react';
import '../style/showCard.scss'

class ShowCard extends Component {
    render() {
        console.log(this.props.show)
        return (
            <div className="showCard">
                <div className="moviePosterContainer">
                <img src={this.props.show.Poster} alt={this.props.show.Title + " show poster"} />
                </div>
                    <div className="cardBody">
                    <div className="cardTitle">{this.props.show.Title}</div>
                    <div>Type: {this.props.show.Type}</div>
                    <div>Year: {this.props.show.Year}</div>
                </div>
            </div>

        );
    }
}

export default ShowCard;