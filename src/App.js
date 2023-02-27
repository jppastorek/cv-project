import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Preview from "./components/Preview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      editor: {
        first: "",
        last: "",
        title: "",
        email: "",
        tel: "",
        website: "",
        about: "",
      },
      preview: {
        first: "",
        last: "",
        title: "",
        email: "",
        tel: "",
        website: "",
        about: "",
      },
    };
  }

  onSubmitPersonal = (e) => {
    e.preventDefault();
    this.setState({
      preview: { ...this.state.editor },
    });
  };

  onSubmitEducation = (e) => {
    e.preventDefault();
  };

  onSubmitWork = (e) => {
    e.preventDefault();
  };

  handleChangeFirst = (e) => {
    this.setState({
      editor: {
        ...this.state.editor,
        first: e.target.value,
      },
    });
  };

  handleChangeLast = (e) => {
    this.setState({
      editor: {
        ...this.state.editor,
        last: e.target.value,
      },
    });
  };

  handleChangeTitle = (e) => {
    this.setState({
      editor: {
        ...this.state.editor,
        title: e.target.value,
      },
    });
  };

  handleChangeEmail = (e) => {
    this.setState({
      editor: {
        ...this.state.editor,
        email: e.target.value,
      },
    });
  };

  handleChangeTel = (e) => {
    this.setState({
      editor: {
        ...this.state.editor,
        tel: e.target.value,
      },
    });
  };

  handleChangeWebsite = (e) => {
    this.setState({
      editor: {
        ...this.state.editor,
        website: e.target.value,
      },
    });
  };

  handleChangeAbout = (e) => {
    this.setState({
      editor: {
        ...this.state.editor,
        about: e.target.value,
      },
    });
  };

  render() {
    const { editor, preview } = this.state;
    return (
      <>
        <Header />
        <div className="container">
          <Form
            submitPersonal={this.onSubmitPersonal}
            submitEducation={this.onSubmitEducation}
            submitWork={this.onSubmitWork}
            handleChangeFirst={this.handleChangeFirst}
            handleChangeLast={this.handleChangeLast}
            handleChangeTitle={this.handleChangeTitle}
            handleChangeEmail={this.handleChangeEmail}
            handleChangeTel={this.handleChangeTel}
            handleChangeWebsite={this.handleChangeWebsite}
            handleChangeAbout={this.handleChangeAbout}
            firstValue={editor.first}
            lastValue={editor.last}
            titleValue={editor.title}
            emailValue={editor.email}
            telValue={editor.tel}
            websiteValue={editor.website}
            aboutValue={editor.about}
          />
          <Preview
            first={preview.first}
            last={preview.last}
            title={preview.title}
            email={preview.email}
            tel={preview.tel}
            website={preview.website}
            about={preview.about}
          />
        </div>
      </>
    );
  }
}

export default App;
