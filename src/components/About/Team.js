import React from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

const Team = ({ imgTeam }) => (
  <section className="team py-5">
    <div className="container">
      <Title title="Team" />
      <div className="row">
        <div className="col-10 col-sm-8 mx-auto text-center">
          <Img fluid={imgTeam.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  </section>
)

export default Team
