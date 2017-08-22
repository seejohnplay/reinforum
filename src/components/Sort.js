import React from 'react'
import { Button, ButtonGroup } from 'reactstrap'

function Sort(props) {
    const { sortKey, updateSortKey } = props

    return (
      <div style={{marginTop: "15px"}}>
        <span style={{marginRight: "10px"}}>Sort by</span>
        <ButtonGroup>
          <Button
            className={sortKey === "voteScore" ? "active" : ""}
            style={{cursor: "pointer"}}
            onClick={() => updateSortKey("voteScore")}>
              Popularity
          </Button>
          <Button
            className={sortKey === "timestamp" ? "active" : ""}
            style={{cursor: "pointer"}}
            onClick={() => updateSortKey("timestamp")}>
              Timestamp
          </Button>
        </ButtonGroup>
        <hr />
      </div>
    )
}

export default Sort
