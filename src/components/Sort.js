import React from 'react'
import { Button, ButtonGroup, Card, CardTitle } from 'reactstrap'

function Sort(props) {
    const { sortKey, updateSortKey } = props

    return (
      <Card block>
        <CardTitle>
          <span style={{marginRight: "10px"}}>Sort by:</span>
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
        </CardTitle>
      </Card>
    )
}

export default Sort
