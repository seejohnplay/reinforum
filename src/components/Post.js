import React from 'react'
import { connect } from 'react-redux'
import { loadPosts } from '../actions'
import { Card, Button, CardTitle, CardText, CardDeck } from 'reactstrap'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cardColor: {
        react: 'info',
        redux: 'warning',
        udacity: 'danger'
      }
    }
  }

  componentDidMount() {
    this.props.loadPosts()
  }

  render() {
    const { cardColor } = this.state

    return (
      <div>
        <CardDeck>
          {this.props.posts.map(post => (
            <Card block inverse color={cardColor[post.category]}>
              <CardTitle>(score: {post.voteScore}) {post.title} <small>{post.category}</small></CardTitle>
              <CardText>{post.body} - {post.author}</CardText>
              <Button>Read comments</Button>
          </Card>))}
        </CardDeck>
      </div>
    )
  }
}

function mapStateToProps ({ posts }) {
  return {
    posts: posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadPosts: () => dispatch(loadPosts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)