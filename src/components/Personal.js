import React, { Component } from "react";

class Personal extends Component {
  constructor() {
    super();

    this.state = {
      first: "",
      last: "",
      title: "",
      email: "",
      tel: "",
      website: "",
      about: "",
    };
  }

  handleChangeFirst = (e) => {
    this.setState({
        first: e.target.value
    })
  }

  render() {
    const { first, last, title, email, tel, website, about } = this.state;
    return (
      <form>
        <h2>Personal Information</h2>
        <div className="side-by-side">
          <div className="input">
            <label htmlFor="first">First Name</label>
            <input
              type="text"
              id="first"
              name="first"
              placeholder="John"
              value={first}
              onChange={this.handleChangeFirst}
            />
          </div>
          <div className="input">
            <label htmlFor="last">Last Name</label>
            <input
              type="text"
              id="last"
              name="last"
              placeholder="Doe"
              value={last}
            />
          </div>
        </div>
        <div className="input">
          <label htmlFor="title">Title</label>
          <input
            type="email"
            id="title"
            name="title"
            placeholder="Job Title"
            value={title}
          />
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@example.com"
            value={email}
          />
        </div>
        <div className="input">
          <label htmlFor="tel">Phone</label>
          <input
            type="tel"
            id="tel"
            name="tel"
            placeholder="555-555-5555"
            value={tel}
          />
        </div>
        <div className="input">
          <label htmlFor="site">Website</label>
          <input
            type="text"
            id="site"
            name="website"
            placeholder="www.example.com"
            value={website}
          />
        </div>
        <div className="input">
          <label htmlFor="about">About</label>
          <textarea
            name="about"
            placeholder="Write a short description about yourself..."
            value={about}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default Personal;
