import React from 'react'

export default function Category(props) {
  return <h1>{props.match.params.name}</h1>
}
