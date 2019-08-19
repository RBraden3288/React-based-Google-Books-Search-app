import React, { Component } from 'react';
import API from "../utils/API"

export default class Books extends Component {
    state = {
        books: []
    }


componentDidMount() {
    this.loadBooks()
};

// method to update the array of books in the state
loadBooks = () => {
    API.getBooks()
    .then(res => this.setState({books: res.data}))
    .cathc(err => console.log(err));
}

render() {
    return(
        <container>

        </container>
    )
}
}