import React from "react"
import Product from "./Product"
import { StaticQuery, graphql } from "gatsby"
import Title from "../Globals/Title"

const getProducts = graphql`
  {
    products: allContentfulShoesProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Products = () => (
  <StaticQuery
    query={getProducts}
    render={data => {
      return (
        <section className="py-5">
          <div className="container">
            <Title title="Nos produits" />
            <div className="row">
              {data.products.edges.map(({ node: product }) => {
                return <Product key={product.id} product={product} />
              })}
            </div>
          </div>
        </section>
      )
    }}
  />
)

export default Products
