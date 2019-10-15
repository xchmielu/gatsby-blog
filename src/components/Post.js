import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "gatsby"

export default props => (
  <Card style={{ width: "25rem", margin: "25px 25px 25px 25px" }}>
    <Card.Img variant="top" src={props.image} />
    <Card.Body>
      <p className="card--title">{props.title}</p>
      <p className="card--date">{props.date}</p>
      <p className="card--excerpt">{props.excerpt}</p>
      <div className="card__button">
        <button className="card__button--button">
          <Link className="card--button--link" to={props.readmore}>
            Read post
          </Link>
        </button>
      </div>
    </Card.Body>
  </Card>
)
