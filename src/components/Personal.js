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

  handleChangeLast = (e) => {
    this.setState({
      last: e.target.value
    })
  }

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleChangeTel = (e) => {
    this.setState({
      tel: e.target.value
    })
  }

  handleChangeWebsite = (e) => {
    this.setState({
      website: e.target.value
    })
  }

  handleChangeAbout = (e) => {
    this.setState({
      about: e.target.value
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
              onChange={this.handleChangeLast}
            />
          </div>
        </div>
        <div className="input">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Job Title"
            value={title}
            onChange={this.handleChangeTitle}
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
            onChange={this.handleChangeEmail}
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
            onChange={this.handleChangeTel}
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
            onChange={this.handleChangeWebsite}
          />
        </div>
        <div className="input">
          <label htmlFor="about">About</label>
          <textarea
            name="about"
            placeholder="Write a short description about yourself..."
            value={about}
            onChange={this.handleChangeAbout}
          />
        </div>
        <button type="submit" onClick={this.handleClick}>Save</button>
      </form>
    );
  }
}

export default Personal;
