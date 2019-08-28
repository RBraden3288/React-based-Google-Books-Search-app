import React from 'react';
import '../App.css';
import API from '../utils/API';
import { Col,
    Row,
    FormGroup,
    Input
    } from 'reactstrap';

import SearchResults from '../components/SearchResults';
import Saved from '../components/Saved';
import BookDetails from '../components/BookDetails';

export default class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bookSearch: "",
            searchHeader: "no searches",
            savedHeader: "You have no saved books.",
            books: []
        }

    }
    
    handleChange = (event) => {
        this.setState({ bookSearch: event.target.value })
        this.setState({ searchHeader: event.target.value })
    };
    
    getBooks = () =>
        API.getBooks(this.state.bookSearch)
            .then(res =>
                this.setState({
                    books: res.data
                })
            )
            .catch(() =>
                this.setState({
                books: [],
                searchHeader: "Your search didn't generate any matches."
                })
            )

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('search for', this.state.bookSearch, 'was clicked');
        this.getBooks();
    };

    handleBookSave = id => {
        const book = this.state.books.find(book => book.id === id);
        API.saveBook({
            googleId: book.id,
            title: book.volumeInfo.title,
            subtitle: book.volumeInfo.subtitle,
            link: book.volumeInfo.infoLink,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
          }).then(() => this.getBooks());
    };
   
    // changeResultsHeader(book) {
    //     if (!book === 0) {
    //         savedHeader = "You have ", book.length, " saved book(s)";
    //     } else {
    //        savedHeader 
    //     }
    // }

    componentDidMount() {
        this.getSavedBooks();
      }
    
      getSavedBooks = () => {
        API.getSavedBooks()
          .then(res =>
            this.setState({
              books: res.data
            })
          )
          .catch(err => console.log(err));
      };
    
      handleBookDelete = id => {
        API.removeBook(id).then(res => this.getSavedBooks());
      };

    render() {

        return(    
            <div>     
            <div className='search-container'>
                <div className='search-bar'>
            <form onSubmit={this.handleSubmit}>
                <FormGroup className="search-field">
                    <Input           
                        type="search"
                        name="search"
                        id="exampleSearch"
                        placeholder="Search Google for Books"
                        onChange={this.handleChange}
                    />
                    <button className='search-btn'>
                        search
                </button>
                </FormGroup>
            </form>
                </div>
        </div>
        <Row>
                <Col className='data-container left'>
                <SearchResults />
                <p className='main-header'>These are the results for:</p>
                <p className='sub-header'>
                    {this.state.searchHeader}
                </p>
                <hr />
                <li>
                    <ul>
                    {this.state.books.map(book => (
                    <BookDetails
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn"
                        >
                          Save this
                        </button>
                      )}
                    />
                  ))}
                    </ul>
                </li>
                </Col>
                <Col className='data-container right'>
                <Saved />
                <p className='main-header'>Books you have saved:</p>
                <p className='sub-header'>
                    {this.state.savedHeader}
                </p>
                <hr />

                </Col>
        </Row>
            </div>
        )
    }

}