import React from 'react';
import Navigation from '../components/Navigation';
import SavedGrid from '../components/SavedGrid';


export default class Saved extends React.Component{
    render(){
        return(
            <div>
                <Navigation />
                <SavedGrid />
            </div>
        )
    }
}