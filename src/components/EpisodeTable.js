import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getShowProgress } from '../actions/watchlistActions'
import Table from 'react-bootstrap/Table'
import '../style/EpisodeTable.scss';
import PirateX from '../style/pirate-x.svg';

class EpisodeTable extends Component {

    markProgress = (ep) => {
        const showID = this.props.progress.showProgress.show.show.id
        const progress = { show_id: showID, user_id: this.props.userID, episode_id: ep.id, season_id: ep.season_id }
        const progressExists = this.props.progress.showProgress.progress.find(p => p.episode_id === ep.id)

        if (progressExists) {
            fetch(`${process.env.REACT_APP_API_ENDPOINT}/progresses/${progressExists.id}`, {
                method: "DELETE",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Authorization": `JWT ${localStorage.getItem('token')}`,
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
            .then(r => r.json())
            .then(data => {
                this.props.getShowProgress(this.props.auth.user.id, this.props.progress.showProgress.show.show.imdbID)
            })
        } else {
            fetch(`${process.env.REACT_APP_API_ENDPOINT}/progresses`, {
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Authorization": `JWT ${localStorage.getItem('token')}`,
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(progress)
            })
                .then(r => r.json())
                .then(response => {
                    this.props.getShowProgress(this.props.auth.user.id, this.props.progress.showProgress.show.show.imdbID)
                })
        }
    }


    mapEpisode = () => {

        return this.props.episodes.map(ep => {
            return <tr onClick={() => this.markProgress(ep)} className="table-row" key={ep.title}>
                <td><div className="table-info ep-num">{ep.episode_num}</div></td>
                <td><div className="table-info ep-title">{ep.title}</div></td>
                <td><div className="table-info ep-date">{ep.released}</div></td>
                {this.props.progress.showProgress.progress.find(p => p.episode_id === ep.id) ? <td><div className="table-info"><img className="pirate-x" src={PirateX} alt="x logo to mark place"/></div></td> : <td><div className="table-info"></div></td>}

            </tr>
        })
    }



    render() {
        return (
            <div className="episode-table-container">
                <Table striped bordered hover size="sm">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Released</th>
                            <th>Watched</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mapEpisode()}
                    </tbody>

                </Table>

            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth,
    progress: state.showProgress
})

const mapDispatchToProps = {
    getShowProgress
}

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeTable);