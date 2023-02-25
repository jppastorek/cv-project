import "./App.css";
import React, { Component } from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import Preview from "./components/Preview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      personal: "",
      education: "",
      work: "",
    }
  }

  onSubmitPersonal = (e) => {
    e.preventDefault();
  }

  onSubmitEducation = (e) => {
    e.preventDefault();
  }

  onSubmitWork = (e) => {
    e.preventDefault();
  }
  
  render() {
    const { personal, education, work } = this.state;
    return (
      <>
        <Header />
        <div className="container">
          <Form submitPersonal={this.onSubmitPersonal} submitEducation={this.onSubmitEducation} submitWork={this.onSubmitWork} />
          <Preview personal={personal} education={education} work={work} />
        </div>
      </>
    );
  }
  
}

export default App;
