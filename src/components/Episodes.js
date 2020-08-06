import React, { Component } from 'react';
import { connect } from 'react-redux';
import EpisodeTable from './EpisodeTable';


class Episodes extends Component {

    render() {
        const seasonNum = this.props.seasonNum
        return (
            <div className="episode-container">
    
                    {seasonNum ?
                        <p>Season {seasonNum}</p>
                        :
                        <p>Select A Season</p>
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