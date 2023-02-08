import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

const CommentList = (props) => (
  <ListGroup style={{ color: 'black' }} className="mt-2">
    {props.commentsToShow.map((comment) => (
      <SingleComment comment={comment} key={comment._id} reloadComments={props.reloadComments} />
    ))}
  </ListGroup>
)

export default CommentList
