import React from "react";
import { Card, Button } from 'react-bootstrap'
import { Link } from "gatsby";

export default (props) => (
    <Card style={{ width: '25rem', margin: '25px 25px 25px 25px' }}>
  <Card.Img variant="top" src={props.image} />
  <Card.Body>
    <p>{props.date}</p>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
    {props.excerpt}
    </Card.Text>
    <Button variant="primary" as={Link} to={props.readmore}>Czytaj dalej</Button>
  </Card.Body>
</Card>
)