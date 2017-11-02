import React from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago'
import Vote from './Vote'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'

function Comment(props) {
  const { comment, deleteComment, vote } = props

  return (
    <div>
      <p style={{marginBottom: "0"}}>{comment.body}</p>
      <p className="text-muted">Commented <TimeAgo date={comment.timestamp} live={false} /> by {comment.author}</p>
      <h6>
        <Vote on={comment} vote={vote} />
        <Link style={{margin: "0 5px", color: "black"}} to={"/posts/"+comment.post_id+"/comments/"+comment.id+"/edit"}><FaPencil /></Link>
        <span style={{cursor: "pointer"}} onClick={() => deleteComment(comment.post_id, comment.id)}><FaTrash color="lightRed" /></span>
      </h6>
      <hr />
    </div>
  )
}

export default Comment
