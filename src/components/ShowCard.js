import React, { Component } from 'react';
import { connect } from 'react-redux';
import { viewShow } from '../actions/showActions'
import { Switch, Redirect } from 'react-router-dom'

import '../style/showCard.scss'


class ShowCard extends Component {

    handleClick = (event) => {
        event.preventDefault()
        this.props.viewShow(this.props.show)
        this.props.history.push('/view-show')
       
    }



    render() {
        return (
            <div className="showCard" onClick={this.handleClick}>
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

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = {
    viewShow
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowCard);