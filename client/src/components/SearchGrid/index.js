import React from 'react';
import {
    FormGroup,
    Row,
    Col,
    Label,
    Input
} from 'reactstrap';
import './searchgrid-style.css';

export default class SearchGrid extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            bookSearch: "",
            results: []
        }

    }

    handleChange = (event) => {
        this.setState({bookSearch: event.target.value})
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('search for', this.state.bookSearch, 'was clicked')
    }

    render() {
        return (
            <div>
            
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
                                onChange={this.handleChange}
                            />
                            <button className='search-btn'>
                                search for a book
                            </button>
                        </FormGroup>
                    </form>
                </div>
            </div>

            <div className='results'>
                {/* if there are no results to display, add following message: */}
                <p className='no-results'>There are no results to display.</p>
                {/* if there are results map through below*/}
                <Label className='label'>Returning Search Results for: {this.state.bookSearch}</Label>
                <Row className='inner-results'>
                    <div className='inner-results'>
                        <Col xs="6">this.props.image</Col>
                    </div>
                    <div className='inner-results'>
                        <Col xs="auto">title authors and link</Col>
                    </div>
                </Row>
            </div>
            </div>
        )
    }
}