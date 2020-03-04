import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
const Info = () => (
  <section className="py-5">
    <div className="container">
      <Title title="Notre Histoire" />
      <div className="row">
        <div className="col-10 col-sm-8 mx-auto text-center">
          <p className="lead text-muted mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit
            ornare imperdiet. Proin augue leo, pretium eu cursus et, placerat ac
            justo. Phasellus vel pharetra augue, quis feugiat quam. Suspendisse
            potenti. Donec convallis mauris eget eleifend molestie. Phasellus
            convallis ipsum eu nunc ultrices rutrum non at turpis. Duis mattis
            velit ut urna rutrum finibus nec sit amet eros. Aliquam quis aliquam
            turpis, eu laoreet leo. Morbi malesuada sed diam sed placerat. Morbi
            vel fermentum sem. Quisque quis hendrerit purus, eget vestibulum
            enim. Integer eget elit dictum, efficitur tortor sed, vestibulum
            ante. Integer a metus justo. Donec augue odio, molestie at leo ac,
            pharetra sodales eros. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nullam ultrices dapibus nisl, a iaculis enim
            maximus vulputate.
          </p>
          <Link to="/about">
            <button className="btn text-uppercase btn-orange">
              A propos de la page
            </button>
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export default Info
