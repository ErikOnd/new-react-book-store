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
import { useState } from 'react'


const App = () => {

  const [selectedBook, setSelectedBook] = useState(undefined)

  const changeSelectedBook = (clickedBook) => {
    console.log('test')
    setSelectedBook(clickedBook)
  }

  return (
    <Container>
      <MyNav />
      <MyJumbotron />
      <Row>
        <Col><BookList books={fantasy} newBook={changeSelectedBook} /></Col>
        <Col><CommentArea bookAsin={selectedBook}></CommentArea></Col>
      </Row>

      <MyFooter />
    </Container>
  )
}

export default App
