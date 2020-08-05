import React, { Component } from 'react';
import { connect } from 'react-redux';
import EpisodeTable from './EpisodeTable';


class Episodes extends Component {

    render() {
        const seasonNum = this.props.seasonNum
        return (
            <div className="episode-container">
                {/* <div className="season-header"> */}
                    {seasonNum ?
                        <p>Season {seasonNum}</p>
                        :
                        <p>Select A Season</p>
                    }

                {/* </div> */}
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