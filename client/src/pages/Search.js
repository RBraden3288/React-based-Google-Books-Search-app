import React from 'react';
import Navigation from '../components/Navigation';
import SearchGrid from '../components/SearchGrid';
import SavedGrid from '../components/SavedGrid';
import { Container, Col } from 'reactstrap';

require ('dotenv').config();


export default class Search extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            results: []
        }
    }

    getSearchResults = (title) => {
        // title will be the value from your search input
        //api call to get results
        // set result state
    }

    render(){

        // const googleAPI = process.env.GoogleBooksAPIKey;
        // console.log('api key', googleAPI)

        return(
            <div className="routes">
                <Navigation />
                <Col>
                    <div className="books-container">
                    <Container className="search-bar-container">
                        {/* <SearchBar getSearchResults={this.getSearchResults}/> */}
                        <SearchGrid />
                    </Container>
                    </div>
                </Col>
                <Col>
                    <div className="books-container">
                    <Container className='search-results-container'>
                    <SavedGrid />
                    </Container>
                    </div>
                </Col>
            </div>
        )
    }
}