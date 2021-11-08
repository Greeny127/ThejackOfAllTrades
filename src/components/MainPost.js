import React from "react"
import { Link } from "gatsby"
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  Button,
} from "reactstrap"

// <CardImg alt="alt text" src={thumbnail} />

const MainPost = ({ title, author, slug, date, body, thumbnail }) => {
  return (
    <Card color="dark" inverse id="maincardHomePage">
      <Link to={slug}>
        <CardImg
          alt="Thumbnail"
          src={thumbnail}
          top
          id="maincardThumbnailHomePage"
          className="cardimage"
        />
      </Link>
      <CardBody>
        <Link to={slug} className="titleCardLink">
          <CardTitle tag="h2">{title}</CardTitle>
        </Link>
        <CardSubtitle className="text-muted" tag="h5">
          By {author} at {date}
        </CardSubtitle>
        <CardText>{body}</CardText>

        <Button className="cardButton">
          <Link className="linkTo" to={slug}>
            Go to post
          </Link>
        </Button>
      </CardBody>
    </Card>
  )
}

export default MainPost
