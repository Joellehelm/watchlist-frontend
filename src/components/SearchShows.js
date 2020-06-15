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
        console.log("handle submit in searchShows")
        event.preventDefault()
        this.props.showSearch(event.target.search.value)
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" name="search" placeholder="Search..." />
                <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default SearchShows;