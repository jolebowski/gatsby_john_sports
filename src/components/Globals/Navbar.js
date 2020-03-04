import React, { Component } from "react"
import { Link } from "gatsby"
import { FaCartArrowDown } from "react-icons/fa"
import logo from "../../images/iconfinder.png"

export default class Navbar extends Component {
  state = {
    navBarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "Accueil",
      },
      {
        id: 2,
        path: "/about",
        text: "A propos de nous",
      },
    ],
  }

  navBarHandler = () => {
    this.state.navBarOpen
      ? this.setState({ css: "collapse navbar-collapse", navBarOpen: false })
      : this.setState({
          css: "collapse navbar-collapse show",
          navBarOpen: true,
        })
  }

  render() {
    const { css } = this.state
    return (
      <nav
        className="navbar
             navbar-expand-sm bg-light 
             navbar-light"
      >
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navBarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link
                    to={link.path}
                    className="nav-link
                    text-capitalize"
                  >
                    {link.text}
                  </Link>
                </li>
              )
            })}
            <li className="nav-item ml-sm-5">
              <FaCartArrowDown className="car-icon" />
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
