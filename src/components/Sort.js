import React from 'react'
import { Button, ButtonGroup } from 'reactstrap'

function Sort(props) {
    const { sortKey, updateSortKey } = props

    return (
      <div style={{marginTop: "15px"}}>
        <span style={{marginRight: "10px"}}>Sort by</span>
        <ButtonGroup>
          <Button
            className={sortKey === "vote_score" ? "active" : ""}
            style={{cursor: "pointer"}}
            onClick={() => updateSortKey("vote_score")}>
              Popularity
          </Button>
          <Button
            className={sortKey === "created_at" ? "active" : ""}
            style={{cursor: "pointer"}}
            onClick={() => updateSortKey("created_at")}>
              Timestamp
          </Button>
        </ButtonGroup>
        <hr />
      </div>
    )
}

export default Sort
