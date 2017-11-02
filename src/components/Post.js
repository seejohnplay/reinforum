import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadComments } from '../actions'
import TimeAgo from 'react-timeago'
import CommentList from './CommentList'
import Vote from './Vote'
import { Badge, CardText } from 'reactstrap'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'

class Post extends React.Component {
  componentWillMount() {
    this.props.loadComments(this.props.post.id)
  }

  render() {
    const { category, comments, post, showComments, vote } = this.props
    const MaybeLink = !showComments ? Link : CardText;

    return (
      <div>
        <h4>
          <MaybeLink to={"/" + category.url + "/" + post.id}>{post.title}</MaybeLink>
        </h4>
        <p className="text-muted">
          Posted <TimeAgo date={post.created_at} live={false} /> by {post.author}
          <span style={{marginLeft: "5px"}}>
            <Badge pill className={category.url + "-card"} tag={Link} to={"/" + category.url}>{category.name}</Badge>
          </span>
        </p>

        <p>{post.body}</p>
        <h6>
          <Vote on={post} vote={vote} />
          <span className="text-muted">{ (comments[post.id] || []).length } comments</span>
          <Link style={{margin: "0 5px", color: "black"}} to={"/posts/"+post.id+"/edit"}><FaPencil /></Link>
          <span style={{cursor: "pointer"}} onClick={() => this.props.deletePost(post.id)}><FaTrash color="lightRed" /></span>
        </h6>
        <hr />
        {this.commentCount > 0 &&
          <h4>Comments</h4>}
        {showComments &&
          <CommentList comments={comments[post.id]} parentId={post.id} />
        }
      </div>
    )
  }
}

function mapStateToProps ({ categories, comments }, ownProps) {
  return {
    category: categories.find(category => category.id === ownProps.post.category_id),
    comments
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadComments: (postId) => dispatch(loadComments(postId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
