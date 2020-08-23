import React, { Component } from 'react';
import { connect } from 'react-redux';
import EpisodeTable from './EpisodeTable';



class Episodes extends Component {

    render() {
        const seasonNum = this.props.seasonNum
        return (
            <div className="episode-container">
    
                    {seasonNum ?
                        <div className="watchlist-table-title"><p className="styled-text">Season {seasonNum}</p></div>
                        :
                        <div className="watchlist-table-title"><p className="styled-text">Select A Season</p></div>
                    }

    
                <EpisodeTable progress={this.props.progress} userID={this.props.auth.user.id} episodes={this.props.episodes} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    progress: state.showProgress
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);