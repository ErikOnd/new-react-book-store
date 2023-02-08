import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddComment = (props) => {

  const [comment, setComment] = useState({
    comment: '',
    rate: 1,
    elementId: props.asin,
  })


  const sendComment = async (e) => {

    //but why?
    setComment(comment.elementId = props.asin)


    e.preventDefault()
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(comment),
          headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NDNmM2U3MzczODAwMTUzNzQzYjkiLCJpYXQiOjE2NzUzNDMwOTcsImV4cCI6MTY3NjU1MjY5N30._c0I4sL8mFtF5NXSQHQAHBF60mAfVFc4FUVYr7nBI8g',
          },
        }
      )
      if (response.ok) {
        setComment({
          comment: '',
          rate: 1,
          elementId: props.asin,
        })

      } else {
        console.log('error')
        alert('something went wrong')
      }
    } catch (error) {
      console.log('error')
    }
  }

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group>
          <Form.Label>Comment text</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add comment here"
            value={comment.comment}
            onChange={(e) =>

              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment({
                ...comment,
                rate: e.target.value,
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default AddComment
