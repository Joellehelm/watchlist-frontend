import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import '../style/showCard.scss'
import filmPlaceholder from '../style/film-placeholder.png'


class ShowCard extends Component {
    constructor() {
        super()
        this.state = {
            isFlipped: false
        }
    }

    handleClick = (event) => {
        event.preventDefault()
        this.props.viewShow(this.props.show)
        this.props.openOrCloseModal()
        // this.props.history.push('/view-show')

    }

    handleMouseOver = (event) => {
        event.preventDefault()
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));

    }


    render() {
        return (
          

            <div onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOver} onClick={this.handleClick} className="showCard">
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">

                    <div className="moviePosterContainer">
                        <img src={this.props.show.Poster} onError={(e)=>{e.target.onerror = null; e.target.src=filmPlaceholder}} alt={this.props.show.Title + " show poster"} />
                    </div>


                    <div className="cardBack">
                        <div className="cardTitle"><p>{this.props.show.Title}</p></div>
                        <div className="cardBottom">
                            <div className="cardYear">{this.props.show.Year}</div>
                            <div className="cardType">{this.props.show.Type}</div>
                        </div>

                    </div>

                </ReactCardFlip>
            </div>
         
        );
    }
}


export default ShowCard;