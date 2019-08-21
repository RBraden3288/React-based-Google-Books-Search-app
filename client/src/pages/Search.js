import React from 'react';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

export default class Search extends React.Component{
    render(){
        return(
            <div>
                <Navigation />
                <container className="search-bar-container">
                    <SearchBar />
                </container>
                <container className='search-results-container'>
                    <SearchResults />
                </container>
            </div>
        )
    }
}