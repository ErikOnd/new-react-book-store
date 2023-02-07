import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import MyJumbotron from './components/MyJumbotron'
import CommentArea from './components/CommentArea'
import { Container } from 'react-bootstrap'
import BookList from './components/BookList'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

import fantasy from './data/fantasy.json'
import { Component } from 'react'

class App extends Component {

  state = {
    selectedBook: undefined
  }

  changeSelectedBook = (clickedBook) => {
    this.setState({
      selectedBook: clickedBook
    })
  }

  render() {
    return (
      <Container>
        <MyNav />
        <MyJumbotron />
        <Row>
          <Col><BookList books={fantasy} newBook={this.changeSelectedBook} /></Col>
          <Col><CommentArea bookAsin={this.state.selectedBook}></CommentArea></Col>
        </Row>

        <MyFooter />
      </Container>
    )
  }

}

export default App
