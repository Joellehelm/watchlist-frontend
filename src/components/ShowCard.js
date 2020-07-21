import React, { Component } from 'react';
import { connect } from 'react-redux';
import { viewShow } from '../actions/showActions'
import ReactCardFlip from 'react-card-flip';


import '../style/showCard.scss'


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
        this.props.history.push('/view-show')
     
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
                    <img src={this.props.show.Poster} alt={this.props.show.Title + " show poster"} />
                </div>


                <div className="cardBack">
                    <div className="cardTitle">{this.props.show.Title}</div>
                    <div>Type: {this.props.show.Type}</div>
                    <div>Year: {this.props.show.Year}</div>

                </div>

            </ReactCardFlip>
            </div>
  
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = {
    viewShow
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowCard);