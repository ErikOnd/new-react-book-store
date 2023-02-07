import { Component } from 'react'
import { Card } from 'react-bootstrap'

class SingleBook extends Component {
  state = {
    selected: false,
  }

  selectBook = () => {
    this.setState({ selected: !this.state.selected })
    this.props.newBook(this.props.book.asin)
  }


  render() {
    return (
      <>
        <Card
          onClick={() => this.selectBook()}
          style={{ border: this.state.selected ? '3px solid red' : 'none' }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
        {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
      </>
    )
  }
}

export default SingleBook
