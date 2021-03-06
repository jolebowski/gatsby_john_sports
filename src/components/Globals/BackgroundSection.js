import React from "react"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ img, styleClass, title }) => (
  <BackgroundImage className={styleClass} fluid={img}>
    <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
      {title}
    </h1>
  </BackgroundImage>
)

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}
export default BackgroundSection
