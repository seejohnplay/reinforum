import React from 'react'
import ThumbsUpIcon from 'react-icons/lib/fa/thumbs-o-up'
import ThumbsDownIcon from 'react-icons/lib/fa/thumbs-o-down'
import StarIcon from 'react-icons/lib/fa/star'

function Vote(props) {
  const { on, vote } = props

  return (
    <span>
      {on.vote_score} <StarIcon color="gold" />
      <button onClick={() => vote(on.id, "upvote")}
        style={{backgroundColor: "transparent", border: "none", cursor: "pointer"}}>
          <ThumbsUpIcon color="lightGreen" />
      </button>
      <button onClick={() => vote(on.id, "downvote")}
        style={{backgroundColor: "transparent", border: "none", cursor: "pointer"}}>
          <ThumbsDownIcon color="red" />
      </button>
    </span>
  )
}

export default Vote
