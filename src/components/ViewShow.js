import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/viewShow.scss'


class ViewShow extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="viewShowContainer">
                <div className="viewShowTitle">{this.props.show.Title}</div>
                
            <div className="viewShowInner">
                <div className="viewShowPoster"><img src={this.props.show.Poster} alt={this.props.show.Title + " show poster"}/></div>
            </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    show: state.viewShow.show
})


export default connect(mapStateToProps)(ViewShow);

