import { useEffect, useState } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

const CommentArea = (props) => {

  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const getData = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' +
        props.bookAsin,
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NDNmM2U3MzczODAwMTUzNzQzYjkiLCJpYXQiOjE2NzUzNDMwOTcsImV4cCI6MTY3NjU1MjY5N30._c0I4sL8mFtF5NXSQHQAHBF60mAfVFc4FUVYr7nBI8g',
          },
        }
      )
      console.log(response)
      if (response.ok) {
        let comments = await response.json()
        setComments(comments)
        setIsLoading(false)
        setIsError(false)
      } else {
        console.log('error')
        setIsLoading(false)
        setIsError(true)
      }
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      setIsError(true)
    }
  }

  /* 
    useEffect(() => {
      getData()
    }, []) */


  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.bookAsin])



  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={props.bookAsin} />
      <CommentList commentsToShow={comments} />
    </div>
  )
}

export default CommentArea
