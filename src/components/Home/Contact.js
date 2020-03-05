import React from "react"
import Title from "../Globals/Title"
const Contact = () => {
  return (
    <section className="contact py-5">
      <Title title="Nous contacter" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            action="https://formspree.io/jolebowski@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="John sports"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="email@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                rows="5"
                placeholder="Votre descritpion ici....."
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-orange btn-block text-capitalize mt-5"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Contact
