import { Button, ListGroup } from 'react-bootstrap'

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NDNmM2U3MzczODAwMTUzNzQzYjkiLCJpYXQiOjE2NzUzNDMwOTcsImV4cCI6MTY3NjU1MjY5N30._c0I4sL8mFtF5NXSQHQAHBF60mAfVFc4FUVYr7nBI8g',
          },
        }
      )
    } catch (error) {
      alert('Error - comment was NOT deleted!')
    }
  }

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ml-2"
        onClick={() => deleteComment(comment._id)}
      >
        Delete
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment
