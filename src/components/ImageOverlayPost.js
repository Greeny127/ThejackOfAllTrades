import React from "react"
import { Link } from "gatsby"
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardImg,
  Button,
  CardImgOverlay,
} from "reactstrap"

// <CardImg alt="alt text" src={thumbnail} />

const ImageOverlayPost = ({ title, author, slug, date, body, thumbnail }) => {
  return (
    <Card inverse className="imgcard">
      <Link className="linkTo" to={"/" + slug}>
        <CardImg
          alt="Card image cap"
          src={thumbnail}
          width="100%"
          className="imgcardimg"
        />
        <CardImgOverlay>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle>
            By {author} at {date}
          </CardSubtitle>
          <Button className="cardButton imgcardButton">
            <Link className="linkTo" to={"/" + slug}>
              Go to post
            </Link>
          </Button>
        </CardImgOverlay>
      </Link>
    </Card>
  )
}

export default ImageOverlayPost
