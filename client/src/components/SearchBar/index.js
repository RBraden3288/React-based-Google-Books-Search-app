import React from 'react';
import {
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import './searchBar-style.css';

export default class SearchBar extends React.Component {

    render() {
        return (
            <div className='form-div'>
                <div className='form-group'>
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="exampleSearch" className='label'>Search Google for Books</Label>
                            <Input
                                type="search"
                                name="search"
                                id="exampleSearch"
                                placeholder="title"
                            />
                            <button className='search-btn'>
                                search for a book
                            </button>
                        </FormGroup>
                    </form>

                </div>
            </div>
        )
    }
}