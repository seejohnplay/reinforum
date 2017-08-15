import React from 'react'
import Post from './Post'

export default function Category(props) {
  return (
    <div>
      <h1>{props.match.params.name}</h1>
      <Post />
    </div>
  )
}
