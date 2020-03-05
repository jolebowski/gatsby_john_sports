import React, { Component } from "react"
import Img from "gatsby-image"
import Title from "../Globals/Title"

const getCategories = items => {
  let tempItems = items.map(item => {
    return item.node.category
  })
  let tempCategories = new Set(tempItems)
  let arrCategories = Array.from(tempCategories)
  arrCategories = ["all", ...arrCategories]
  return arrCategories
}

export default class Menu extends Component {
  state = {
    items: [],
    shoesItems: [],
  }
  componentDidMount() {
    this.setState({
      items: this.props.items.edges,
      shoesItems: this.props.items.edges,
      getCategories: getCategories(this.props.items.edges),
    })
  }
  handleItem = categorie => {
    let tempItems = [...this.state.items]
    console.log(this.state.shoesItems, "shoesItem")
    if (categorie === "all") {
      this.setState(() => {
        return { shoesItems: tempItems }
      })
    } else {
      let items = tempItems.filter(({ node }) => node.category === categorie)
      this.setState(() => {
        return { shoesItems: items }
      })
    }
  }
  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="menu py 5">
          <div className="container">
            <Title title="Les meilleurs chaussures" />
            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {this.state.getCategories.map((category, index) => {
                  return (
                    <button
                      type="button"
                      className="btn btn-orange text-capitalize m-3"
                      onClick={() => this.handleItem(category)}
                      key={index}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </div>
            <div className="row">
              {this.state.shoesItems.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="col-11 col-md-6 my-3 d-flex mx-auto"
                  >
                    <div>
                      <Img fixed={node.image.fixed} />
                    </div>
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0">{node.title}</h6>
                        <h6 className="mb-0 textOrange">{node.price} €</h6>
                      </div>
                      <p className="text-muted">
                        <small>{node.description.description}</small>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py 5">
          <div className="container">
            <Title title="Best of your menu" />
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>there are no items to display</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
