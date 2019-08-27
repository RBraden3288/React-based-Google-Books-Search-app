import React from 'react';
import './savedgrid-style.css';
import {
    Col,
    Row,
    Label
} from 'reactstrap';

export default class SavedGrid extends React.Component {
    render() {
        return(
            <div className='grid-container'>
                <div className='saved-books-card'>
                <Label className='label'>Saved Books</Label>
                    <Row>
                    <div className='book-title'>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            this.props.title
                        </Col>
                        </div>
                    </Row>
                        <Row>
                        <div className='book-image'>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            this.props.image
                        </Col>
                        </div>
                        </Row>
                        <Row>
                        <div className='book-author'>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            this.props.authors
                            <br />
                            this.props.description
                            <br />
                            this.props.link
                        </Col>
                        </div>
                        </Row>
                </div>
            </div>
        )
    }
}