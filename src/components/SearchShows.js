import React, { Component } from 'react';


class SearchShows extends Component {
    constructor(){
        super()
        this.state = {
            searchTerm: ""
        }
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.showSearch(event.target.search.value)
        this.props.showContainerSlide()
    }


    render() {
        return (
            <div className="search-bar">
                <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" name="search" placeholder="Search..." />
                <input type="hidden" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default SearchShows;