import { useState } from 'react'
import { Card } from 'react-bootstrap'

const SingleBook = (props) => {

  const [selected, setSelected] = useState(false)

  const selectBook = () => {
    (selected === false ? setSelected(true) : setSelected(false))
    props.newBook(props.book.asin)
  }


  return (
    <>
      <Card
        onClick={() => selectBook()}
        style={{ border: selected ? '3px solid red' : 'none' }}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>
            {props.book.title}
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  )
}

export default SingleBook
