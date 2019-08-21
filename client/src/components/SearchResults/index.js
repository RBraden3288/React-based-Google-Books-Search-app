import React from 'react';
import './searchresults-style.css';

export default class SearchResults extends React.Component {
    render() {
        return(
            <div className='results'>
                <container>
                <p className='no-results'>There are no results to display.</p>

                </container>
            </div>
        )
    }
}