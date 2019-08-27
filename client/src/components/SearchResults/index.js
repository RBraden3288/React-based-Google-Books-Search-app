import React from 'react';
import './searchresults-style.css';
import {
    Row,
    Col,
    Label
} from 'reactstrap';

export default class SearchResults extends React.Component {
    render() {
        return (
            <div className='results'>
                <Label className='label'>Search Results</Label>
                <Row className='inner-results'>
                    <div className='inner-results'>
                        <Col xs="6">this.props.image</Col>
                    </div>
                    <div className='inner-results'>
                        <Col xs="auto">title authors and link</Col>
                    </div>
                </Row>
            </div>
        )
    }
}