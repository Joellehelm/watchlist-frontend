import React, { Component } from 'react';
import ShowCard from './ShowCard'
import '../style/Shows.scss'
import { connect } from 'react-redux'
import ModalExampleShorthand from './ModalExampleShorthand'
import { viewShow } from '../actions/showActions'



class Shows extends Component {
    constructor() {
        super()
        this.state = {
            openModal: false
        }
    }



    mapShows = () => {
        if (this.props.shows.length > 0) {
            return this.props.shows.map(show => <ShowCard viewShow={this.props.viewShow} history={this.props.history} show={show} key={show.imdbID} openOrCloseModal={this.openOrCloseModal} />)
        }
    }



    openOrCloseModal = () => {
        this.setState({ openModal: !this.state.openModal })
    }

    render() {
        return (
            <>                    
            <ModalExampleShorthand openOrCloseModal={this.openOrCloseModal} open={this.state.openModal} />

                <div className="shows">
                    {this.mapShows()}
                </div>

            </>
        );
    }
}


const mapStateToProps = (state) => ({
    show: state.viewShow.show,
    user: state.auth
})

const mapDispatchToProps = {
    viewShow
}


export default connect(mapStateToProps, mapDispatchToProps)(Shows);

